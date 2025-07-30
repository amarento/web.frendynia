import { relations, sql } from 'drizzle-orm';
import {
  boolean,
  date,
  index,
  integer,
  pgEnum,
  pgTableCreator,
  primaryKey,
  serial,
  text,
  time,
  timestamp,
  varchar,
} from 'drizzle-orm/pg-core';
import type { AdapterAccount } from 'next-auth/adapters';

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = pgTableCreator((name) => `${name}`);

// ENUMS
export const rsvpStatus = pgEnum('rsvp_status', [
  'DRAFT',
  'SENT',
  'DELIVERED',
  'READ',
  'FAILED',
  'ATTENDING',
  'DECLINED',
  'CHECKED_IN',
  'ANSWERING',
]);

export const eventType = pgEnum('event_type', ['personal', 'organization']);

export const eventCategory = pgEnum('event_category', [
  'engagement',
  'holy_matrimony',
  'reception',
  'ceremony',
  'party',
  'meeting',
  'conference',
  'other',
]);

export const messageType = pgEnum('message_type', [
  'initial',
  'reminder',
  'follow_up',
  'notification',
]);

export const messageStatus = pgEnum('message_status', [
  'SENT',
  'DELIVERED',
  'READ',
  'FAILED',
]);

export const angpaoRecipient = pgEnum('angpao_recipient', [
  'bride',
  'groom',
  'both',
]);

export const angpaoType = pgEnum('angpao_type', ['digital', 'physical']);

// TABLES
export const clients = createTable('clients', {
  id: serial('id').primaryKey(),
  clientName: varchar('client_name', { length: 256 }).notNull(),
  contactEmail: varchar('contact_email', { length: 256 }),
  phoneNumber: varchar('phone_number', { length: 256 }),
  createdAt: timestamp('created_at', { withTimezone: true })
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).$onUpdate(
    () => new Date()
  ),
});

export const clientRelations = relations(clients, ({ many }) => ({
  events: many(events),
}));

export const events = createTable('events', {
  id: serial('id').primaryKey(),
  clientId: integer('client_id')
    .references(() => clients.id, { onDelete: 'cascade' })
    .notNull(),
  title: varchar('title', { length: 256 }).notNull(),
  location: varchar('location', { length: 256 }).notNull(),
  date: date('date').notNull(),
  time: time('time').notNull(),

  // rsvp fields
  eventCode: varchar('event_code', { length: 256 }).notNull(),
  rsvpServer: varchar('rsvp_server', { length: 256 }),
  imageId: varchar('image_id', { length: 256 }),

  // wedding-specific fields
  groom: varchar('groom', { length: 256 }),
  bride: varchar('bride', { length: 256 }),
  parentsGroom: varchar('parents_groom', { length: 256 }),
  parentsBride: varchar('parents_bride', { length: 256 }),
  eventType: eventType('event_type').notNull().default('personal'),

  // event categorization and relationships
  eventCategory: eventCategory('event_category').notNull().default('ceremony'),
  relatedEventId: integer('related_event_id'),

  // scheduling and reminders
  notes: text('notes'),

  createdAt: timestamp('created_at', { withTimezone: true })
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).$onUpdate(
    () => new Date()
  ),
});

export const eventRelations = relations(events, ({ one, many }) => ({
  client: one(clients, {
    fields: [events.clientId],
    references: [clients.id],
  }),
  eventsToGuests: many(eventsToGuests),
  tasks: many(tasks),
  angpaos: many(angpaos),
  relatedEvent: one(events, {
    fields: [events.relatedEventId],
    references: [events.id],
    relationName: 'RelatedEvents',
  }),
  childEvents: many(events, {
    relationName: 'RelatedEvents',
  }),
}));

export const tasks = createTable('tasks', {
  id: serial('id').primaryKey(),
  eventId: integer('event_id')
    .references(() => events.id, { onDelete: 'cascade' })
    .notNull(),
  title: varchar('title', { length: 256 }).notNull(),
  dueDate: timestamp('due_date', { withTimezone: true }).notNull(),
  isDone: boolean('is_done').default(false).notNull(),
  createdAt: timestamp('created_at', { withTimezone: true })
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).$onUpdate(
    () => new Date()
  ),
});

export const taskRelations = relations(tasks, ({ one }) => ({
  event: one(events, {
    fields: [tasks.eventId],
    references: [events.id],
  }),
}));

export const guests = createTable('guests', {
  id: serial('id').primaryKey(),
  names: varchar('names', { length: 256 }).notNull(),
  phoneNumber: varchar('phone_number', { length: 256 }).notNull(),
  createdAt: timestamp('created_at', { withTimezone: true })
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).$onUpdate(
    () => new Date()
  ),
});

export const guestsRelations = relations(guests, ({ many }) => ({
  eventsToGuests: many(eventsToGuests),
  broughtAngpaos: many(angpaos, { relationName: 'BringerGuest' }),
  fromAngpaos: many(angpaos, { relationName: 'FromGuest' }),
}));

export const eventsToGuests = createTable('events_to_guests', {
  id: serial('id').primaryKey(),
  eventId: integer('event_id')
    .references(() => events.id, { onDelete: 'cascade' })
    .notNull(),
  guestId: integer('guest_id')
    .references(() => guests.id, { onDelete: 'cascade' })
    .notNull(),
  status: rsvpStatus('status').default('DRAFT'),
  side: varchar('side', { length: 256 }), // Groom or Bride
  nRsvp: integer('n_rsvp').notNull(),
  nRsvpWa: integer('n_rsvp_wa'),
  nameList: text('name_list'), // List of names for the guest
  respondedAt: timestamp('responded_at', { withTimezone: true }),
  wish: text('wish'),
  nAttendees: integer('n_attendees'),
  tableName: varchar('table_name', { length: 256 }),
  souvenir: boolean('souvenir').default(false),
  createdAt: timestamp('created_at', { withTimezone: true })
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).$onUpdate(
    () => new Date()
  ),
});

export const eventsToGuestsRelations = relations(
  eventsToGuests,
  ({ one, many }) => ({
    event: one(events, {
      fields: [eventsToGuests.eventId],
      references: [events.id],
    }),
    guest: one(guests, {
      fields: [eventsToGuests.guestId],
      references: [guests.id],
    }),
    rsvpMessages: many(rsvpMessages),
  })
);

export const rsvpMessages = createTable('rsvp_messages', {
  id: serial('id').primaryKey(),
  eventToGuestId: integer('event_to_guest_id')
    .references(() => eventsToGuests.id, { onDelete: 'cascade' })
    .notNull(),
  messageType: messageType('message_type').notNull().default('initial'),
  sentAt: timestamp('sent_at', { withTimezone: true }).notNull(),
  wamid: varchar('wamid', { length: 256 }).notNull(), // WhatsApp message ID
  messageStatus: messageStatus('message_status').notNull().default('SENT'),
  deliveredAt: timestamp('delivered_at', { withTimezone: true }),
  readAt: timestamp('read_at', { withTimezone: true }),
  failureReason: text('failure_reason'),
  createdAt: timestamp('created_at', { withTimezone: true })
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).$onUpdate(
    () => new Date()
  ),
});

export const rsvpMessagesRelations = relations(rsvpMessages, ({ one }) => ({
  eventToGuest: one(eventsToGuests, {
    fields: [rsvpMessages.eventToGuestId],
    references: [eventsToGuests.id],
  }),
}));

export const angpaos = createTable('angpaos', {
  id: serial('id').primaryKey(),
  bringerGuestId: integer('bringer_guest_id')
    .references(() => guests.id, { onDelete: 'cascade' })
    .notNull(),
  fromGuestId: integer('from_guest_id')
    .references(() => guests.id, { onDelete: 'cascade' })
    .notNull(),
  eventId: integer('event_id')
    .references(() => events.id, { onDelete: 'cascade' })
    .notNull(),
  recipient: angpaoRecipient('recipient').notNull().default('both'), // Who receives the angpao: bride, groom, or both
  type: angpaoType('type').notNull().default('physical'), // Type of angpao: digital or physical
  isReceived: boolean('is_received').default(false).notNull(),
  amount: varchar('amount', { length: 100 }), // Optional: to track angpao amount
  notes: text('notes'), // Optional: additional notes about the angpao
  createdAt: timestamp('created_at', { withTimezone: true })
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).$onUpdate(
    () => new Date()
  ),
});

export const angpaosRelations = relations(angpaos, ({ one }) => ({
  bringerGuest: one(guests, {
    fields: [angpaos.bringerGuestId],
    references: [guests.id],
    relationName: 'BringerGuest',
  }),
  fromGuest: one(guests, {
    fields: [angpaos.fromGuestId],
    references: [guests.id],
    relationName: 'FromGuest',
  }),
  event: one(events, {
    fields: [angpaos.eventId],
    references: [events.id],
  }),
}));

// user and authentication tables
export const users = createTable('user', {
  id: varchar('id', { length: 255 })
    .notNull()
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  name: varchar('name', { length: 255 }),
  email: varchar('email', { length: 255 }).notNull(),
  emailVerified: timestamp('email_verified', {
    mode: 'date',
    withTimezone: true,
  }).default(sql`CURRENT_TIMESTAMP`),
  image: varchar('image', { length: 255 }),
  createdAt: timestamp('created_at', { withTimezone: true })
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).$onUpdate(
    () => new Date()
  ),
});

export const usersRelations = relations(users, ({ many }) => ({
  accounts: many(accounts),
}));

export const accounts = createTable(
  'account',
  {
    userId: varchar('user_id', { length: 255 })
      .notNull()
      .references(() => users.id),
    type: varchar('type', { length: 255 })
      .$type<AdapterAccount['type']>()
      .notNull(),
    provider: varchar('provider', { length: 255 }).notNull(),
    providerAccountId: varchar('provider_account_id', {
      length: 255,
    }).notNull(),
    refresh_token: text('refresh_token'),
    access_token: text('access_token'),
    expires_at: integer('expires_at'),
    token_type: varchar('token_type', { length: 255 }),
    scope: varchar('scope', { length: 255 }),
    id_token: text('id_token'),
    session_state: varchar('session_state', { length: 256 }),
    createdAt: timestamp('created_at', { withTimezone: true })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp('updated_at', { withTimezone: true }).$onUpdate(
      () => new Date()
    ),
  },
  (account) => ({
    compoundKey: primaryKey({
      columns: [account.provider, account.providerAccountId],
    }),
    userIdIdx: index('account_user_id_idx').on(account.userId),
  })
);

export const accountsRelations = relations(accounts, ({ one }) => ({
  user: one(users, { fields: [accounts.userId], references: [users.id] }),
}));

export const sessions = createTable(
  'session',
  {
    sessionToken: varchar('session_token', { length: 255 })
      .notNull()
      .primaryKey(),
    userId: varchar('user_id', { length: 255 })
      .notNull()
      .references(() => users.id),
    expires: timestamp('expires', {
      mode: 'date',
      withTimezone: true,
    }).notNull(),
    createdAt: timestamp('created_at', { withTimezone: true })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp('updated_at', { withTimezone: true }).$onUpdate(
      () => new Date()
    ),
  },
  (session) => ({
    userIdIdx: index('session_user_id_idx').on(session.userId),
  })
);

export const sessionsRelations = relations(sessions, ({ one }) => ({
  user: one(users, { fields: [sessions.userId], references: [users.id] }),
}));

export const verificationTokens = createTable(
  'verification_token',
  {
    identifier: varchar('identifier', { length: 255 }).notNull(),
    token: varchar('token', { length: 255 }).notNull(),
    expires: timestamp('expires', {
      mode: 'date',
      withTimezone: true,
    }).notNull(),
    createdAt: timestamp('created_at', { withTimezone: true })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp('updated_at', { withTimezone: true }).$onUpdate(
      () => new Date()
    ),
  },
  (vt) => ({
    compoundKey: primaryKey({ columns: [vt.identifier, vt.token] }),
  })
);
