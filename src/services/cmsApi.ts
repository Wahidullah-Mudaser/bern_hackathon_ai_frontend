const API_BASE_URL = 'http://localhost:5001/api';

export interface DisabilityType {
  WHEELCHAIR_USER: 'wheelchair_user';
  DYSLEXIA: 'dyslexia';
  COGNITIVE_IMPAIRMENT: 'cognitive_impairment';
  ANXIETY_TRAVEL_FEAR: 'anxiety_travel_fear';
  LOW_VISION: 'low_vision';
}

export interface HotelContent {
  name: string;
  location: string;
  coordinates?: string;
  prices: Record<string, string | number>;
  accessibility_features: Record<string, string>;
  images: string[];
  cancellation_conditions: string;
  meal_times: Record<string, string>;
  parking: string;
  amenities: Record<string, string>;
  nearby_accessible_places: Array<Record<string, string>>;
  accessibility_notes: string;
}

export interface TourContent {
  name: string;
  description: string;
  destinations: string[];
  activities: Array<Record<string, string>>;
  accessibility_features: Record<string, string>;
  photos: string[];
  duration: string;
  itinerary: Array<Record<string, string>>;
  support_services: string[];
}

export interface CareServiceContent {
  name: string;
  description: string;
  care_types: string[];
  staff_qualifications: string[];
  pricing_insurance: Record<string, string>;
  images: string[];
  emergency_contact: Record<string, string>;
  accessibility_features: Record<string, string>;
}

export interface ApiResponse<T> {
  success: boolean;
  error?: string;
  message?: string;
  [key: string]: any;
}

class CMSApiService {
  private async request<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
    const url = `${API_BASE_URL}${endpoint}`;
    
    const config: RequestInit = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    };

    try {
      const response = await fetch(url, config);
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || `HTTP ${response.status}`);
      }
      
      return data;
    } catch (error) {
      console.error(`API Error (${endpoint}):`, error);
      throw error;
    }
  }

  // Hotel APIs
  async createHotel(hotelData: HotelContent): Promise<ApiResponse<{ hotel_id: number }>> {
    return this.request('/hotels', {
      method: 'POST',
      body: JSON.stringify(hotelData),
    });
  }

  async getHotels(): Promise<ApiResponse<{ hotels: any[] }>> {
    return this.request('/hotels');
  }

  async getHotel(hotelId: number, disabilityType?: string): Promise<ApiResponse<{ hotel: any }>> {
    const params = disabilityType ? `?disability_type=${disabilityType}` : '';
    return this.request(`/hotels/${hotelId}${params}`);
  }

  // Tour APIs
  async createTour(tourData: TourContent): Promise<ApiResponse<{ tour_id: number }>> {
    return this.request('/tours', {
      method: 'POST',
      body: JSON.stringify(tourData),
    });
  }

  async getTour(tourId: number, disabilityType?: string): Promise<ApiResponse<{ tour: any }>> {
    const params = disabilityType ? `?disability_type=${disabilityType}` : '';
    return this.request(`/tours/${tourId}${params}`);
  }

  // Care Service APIs
  async createCareService(serviceData: CareServiceContent): Promise<ApiResponse<{ service_id: number }>> {
    return this.request('/care-services', {
      method: 'POST',
      body: JSON.stringify(serviceData),
    });
  }

  async getCareService(serviceId: number, disabilityType?: string): Promise<ApiResponse<{ service: any }>> {
    const params = disabilityType ? `?disability_type=${disabilityType}` : '';
    return this.request(`/care-services/${serviceId}${params}`);
  }

  // Utility APIs
  async getDisabilityTypes(): Promise<ApiResponse<{ disability_types: string[]; descriptions: Record<string, string> }>> {
    return this.request('/disability-types');
  }

  async getContentModels(): Promise<ApiResponse<{ content_models: any }>> {
    return this.request('/content-models');
  }

  async validateContent(contentType: string, data: any): Promise<ApiResponse<{ validated_content: any }>> {
    return this.request(`/validate-content/${contentType}`, {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async regenerateAdaptiveContent(
    contentType: string, 
    contentId: number, 
    disabilityType: string
  ): Promise<ApiResponse<{ content: any }>> {
    return this.request(`/regenerate-content/${contentType}/${contentId}`, {
      method: 'POST',
      body: JSON.stringify({ disability_type: disabilityType }),
    });
  }
}

export const cmsApi = new CMSApiService();