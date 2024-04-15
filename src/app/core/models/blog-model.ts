export interface BlogModel {
    id: string;
    name: string;
    title: string;
    body: string;
    isFeatured: boolean;
    image: string;
    created_at: Date;
}
