/**
 * Serviço de API - Substitui Supabase
 * Conecta com backend Node.js no HostGator
 */

// API PHP no HostGator
const API_BASE_URL = import.meta.env.VITE_API_URL || '/api';

// Tipos
interface ApiResponse<T> {
  data?: T;
  error?: string;
}

interface LoginResponse {
  token: string;
  user: {
    id: string;
    email: string;
    name: string;
    role: string;
  };
}

/**
 * Classe para gerenciar requisições HTTP
 */
class ApiService {
  private baseURL: string;
  private token: string | null = null;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
    // Recuperar token do localStorage
    this.token = localStorage.getItem('auth_token');
  }

  /**
   * Definir token de autenticação
   */
  setToken(token: string | null) {
    this.token = token;
    if (token) {
      localStorage.setItem('auth_token', token);
    } else {
      localStorage.removeItem('auth_token');
    }
  }

  /**
   * Fazer requisição HTTP
   */
  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<ApiResponse<T>> {
    try {
      const headers: HeadersInit = {
        'Content-Type': 'application/json',
        ...options.headers,
      };

      if (this.token) {
        headers['Authorization'] = `Bearer ${this.token}`;
      }

      const response = await fetch(`${this.baseURL}${endpoint}`, {
        ...options,
        headers,
      });

      const data = await response.json();

      if (!response.ok) {
        return { error: data.error || 'Erro na requisição' };
      }

      return { data };
    } catch (error: any) {
      console.error('Erro na requisição:', error);
      return { error: error.message || 'Erro de conexão' };
    }
  }

  /**
   * Autenticação
   */
  async login(email: string, password: string): Promise<ApiResponse<LoginResponse>> {
    const response = await this.request<LoginResponse>('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });

    if (response.data) {
      this.setToken(response.data.token);
    }

    return response;
  }

  /**
   * Verificar token
   */
  async verifyToken(): Promise<ApiResponse<LoginResponse['user']>> {
    return this.request('/auth/verify');
  }

  /**
   * Logout
   */
  logout() {
    this.setToken(null);
  }

  /**
   * Tasks (Ordens de Serviço)
   */
  async getTasks(status?: string) {
    const query = status ? `?status=${status}` : '';
    return this.request(`/tasks${query}`);
  }

  async getTaskByOS(osNumber: string) {
    return this.request(`/tasks/os/${osNumber}`);
  }

  async createTask(taskData: any) {
    return this.request('/tasks', {
      method: 'POST',
      body: JSON.stringify(taskData),
    });
  }

  async updateTask(id: string, taskData: any) {
    return this.request(`/tasks/${id}`, {
      method: 'PUT',
      body: JSON.stringify(taskData),
    });
  }

  async deleteTask(id: string) {
    return this.request(`/tasks/${id}`, {
      method: 'DELETE',
    });
  }
}

// Instância singleton
export const apiService = new ApiService(API_BASE_URL);

// Exportar tipos
export type { ApiResponse, LoginResponse };

