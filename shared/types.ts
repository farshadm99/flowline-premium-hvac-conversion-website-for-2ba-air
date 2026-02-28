export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
}
export interface User {
  id: string;
  name: string;
}
export interface Chat {
  id: string;
  title: string;
}
export interface ChatMessage {
  id: string;
  chatId: string;
  userId: string;
  text: string;
  ts: number;
}
export interface Lead {
  id: string;
  createdAt: number;
  name: string;
  phone: string;
  email?: string;
  address: string;
  intent: 'service' | 'estimate' | 'emergency' | 'financing';
  serviceType?: string;
  emergencyType?: string;
  preferredTime?: string;
  message?: string;
  emergency: boolean;
}
export type CreateLeadRequest = Omit<Lead, 'id' | 'createdAt'>;