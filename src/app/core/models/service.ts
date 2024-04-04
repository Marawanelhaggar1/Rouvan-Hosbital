export interface Service {
    id: string;
    name: string;
    description: string;
    description2: string;
    service_group: { id: string; name: string }[];
    image: string;
    icon: string;
}
