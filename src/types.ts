/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Service {
  id: string;
  name: string;
  category: 'hair' | 'skin' | 'makeup' | 'bridal' | 'spa';
  price: number;
  duration: string;
  description: string;
  isPopular?: boolean;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  specialty: string;
  experience: string;
  photoUrl: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
  date: string;
  treatment: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'hair' | 'skin' | 'makeup' | 'bridal';
  imageUrl: string;
}

export type PageId = 'home' | 'about' | 'services' | 'gallery' | 'contact';
