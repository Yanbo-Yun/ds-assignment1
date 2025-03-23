import { Animal } from "../shared/type";
import { createItem } from "../shared/util";

export const Table: Animal[] = [
    createItem({
        Id: 'animal001',
        name: 'Dog', 
        description: "a cute animal",
        likeIt: true,
        rating: 5, 
    }),
    createItem({
        Id: 'animal002',
        name: 'Cat', 
        description: "I love this animal",
        likeIt: true,
        rating: 7, 
    }),
]
