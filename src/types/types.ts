export interface BlogsProps {
  uniqueId: number;
  title: string;
  blog: string;
  category: String[] | number[];
  author: number;
  author_name: string;
  author_profile?: string[];
  createdAt: string;
  featured_image?: string[];
  tags: String[] | number[];
}

export interface BlogCategoryProps {
  uniqueId: number;
  blog_category: string;
}

export interface UserProps {
  uniqueId: string;
  name: string;
  avatar?: string;
}

export interface AdminProps {
  uniqueId: number;
  name: string;
  profile: string[];
}

export interface BlogCategoryProps {
  uniqueId: number;
  blog_category: string;
}

export interface BlogTagProps {
  uniqueId: number;
  blog_tag: string;
}

export interface ReviewProps {
  uniqueId: number;
  property_id: number;
  rating: number;
  comment: string;
}

export interface PropertyCourse {
  property_id: number;
  course_id: string;
  image?: string[];
  course_name: string;
  course_level: string;
  course_type: string;
  course_format: string;
  duration: string;
  course_short_name: string;
  certification_type: string;
}

export interface CourseProps {
  uniqueId: number;
  course_name: string;
  course_type: string;
  course_level: string;
  course_short_name: string;
  certification_type: string;
  course_format: string;
  duration: string;
}

export interface AmenityCategory {
  [key: string]: (Amenity | { [key: string]: boolean | string[] })[];
}

export interface Amenity {
  [key: string]: boolean;
}

export interface PropertyAmenities {
  propertyId: number;
  selectedAmenities: AmenityCategory[];
}

export interface PropertyProp {
  property_city: string;
  property_state: string;
  property_country: string;
  property_logo?: string[];
  property_name: string;
  property_slug: string;
  category: string;
}

export interface PropertyProps {
  uniqueId: number;
  property_name: string;
  property_slug: string;
  featured_image?: string[];
  property_logo?: string[];
  category: string;
  property_type: string;
  property_city: string;
  est_year: string;
  property_description: string;
  rank: number;
  address: string;
  pincode: number;
  city: string;
  state: string;
  country: string;
  reviews: ReviewProps[];
  courses: PropertyCourse[];
  amenities: AmenityCategory;
}

export interface LocationProps {
  property_id: number;
  property_address: string;
  property_pincode: number;
  property_city: string;
  property_state: string;
  property_country: string;
}

export interface CategoryProps {
  uniqueId: number;
  category_name: string;
}
export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export type EventsPageProps = {
  searchParams?: {
    q?: string;
    category?: string;
    page?: string;
  };
};

export type EventListProps = {
  events: Event[];
  filters: Filter[];
  initialQuery: string;
  initialCategory: string;
  initialPage: number;
};
