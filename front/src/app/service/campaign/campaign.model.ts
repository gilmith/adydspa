export interface Campaign {
  id: number;
  name: string;
  description?: string;
  imageUrl?: string;
}

export interface CampaignPage {
  page: number;
  totalPages: number;
  totalElements: number;
  content: Campaign[];
}

export interface GetCampaignsQuery {
  page?: number;
  size?: number;
  sort?: string;
}

export interface CreateCampaignInput {
  name: string;
  imageUrl?: string;
}

export interface UpdateCampaignInput {
  id: number;
  name?: string;
  description?: string;
  image?: Blob;
}
