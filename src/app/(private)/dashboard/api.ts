import axios, { type AxiosInstance } from "axios";
import { type z } from "zod";
import {
  type ChristmasGiftRequest,
  type defaultMessageSchema,
  type UserMessage,
} from "~/server/contracts";

class ClientAPI {
  private axios: AxiosInstance;

  constructor(baseURL: string) {
    this.axios = axios.create({ baseURL });
  }

  async getRSVPStates(): Promise<UserMessage[]> {
    const response = await this.axios.get<UserMessage[]>("/api/user-state");
    return response.data;
  }

  async resetUserState() {
    return await this.axios.post("/api/reset-user-state");
  }

  async sendInitialMessage(clientCode: string, guestId?: number) {
    const request: z.infer<typeof defaultMessageSchema> = {
      clientCode,
      type: "initial",
    };
    if (guestId) request.guestId = guestId;
    return await this.axios.post("/api/send-template", request);
  }

  async sendReminder(clientCode: string, guestId?: number, withQR = false) {
    const request: z.infer<typeof defaultMessageSchema> = {
      clientCode,
      type: "reminder",
      withQR: withQR,
    };
    if (guestId) request.guestId = guestId;
    return await this.axios.post("/api/send-template", request);
  }

  async sendReminderMessageWithQR(code: string) {
    const request = { clientCode: code };
    return await this.axios.post("/api/send-reminder-with-qr", request);
  }

  async sendChristmasGiftMessage(
    name: string,
    giftId: number,
    waNumber: string,
  ) {
    const request: ChristmasGiftRequest = {
      name,
      giftId,
      waNumber,
    };
    return await this.axios.post("/api/christmas-gift", request);
  }

  async uploadImage(formData: FormData) {
    return await this.axios.post("/api/upload-image", formData);
  }
}

export default ClientAPI;
