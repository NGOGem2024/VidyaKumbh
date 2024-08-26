// src/types.ts

export interface College {
    id: number;
    name: string;
    ranking: number;
    imageUrl: string;
    location: string;
    established: number;
    visit: string;
    brochure: string;
    admissionqr: string;
    placementqr:string;
    
  admissionQrImage: string;  
  placementQrImage: string;
    about: string;
    principal: string;
    courses: Array<{
      name: string;
      duration: string;
      description: string;
    }>;
    facilities: string[];
  }
  
  // Add other shared types and interfaces as needed