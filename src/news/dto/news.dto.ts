export class NewsDto {
    _id : Number | String
    title : String
    description : String
    type_new : "image" | "video"
    createdAt : Date
    updatedAt : Date
}