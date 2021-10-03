export interface LOGIN_USER {
  email: string;
  first_name?: string;
  last_name?: string;
}

export interface CREDENTIAL {
  email: string;
  password: string;
}

export interface JWT_TOKEN {
  refresh: string;
  access: string;
}

export interface AUTH_STATE {
  isLogin: boolean;
  loginUser: LOGIN_USER;
}

export interface SEMINAR {
  id: number;
  name: string;
  method: string;
  affiliation?: string;
  department?: string;
  staff: string;
  place: string;
  start_date: string;
  end_date: string;
  start_application_date?: string;
  end_application_date?: string;
  number_of_attendees?: number;
  capacity?: number;
  application_page?: string;
  application_list?: string;
  audience_page?: string;
  event_page?: string;
  is_reserved: boolean;
  invitation_mail?: string;
  remaind_mail?: string;
  viewing_guid_mail?: string;
  thank_you_mail?: string;
  creater?: number;
  created_at: string;
  updated_at: string;
}

export interface SeminarState {
  selectedSeminar: SEMINAR;
  editedSeminar: SEMINAR;
  seminars: SEMINAR[];
}
