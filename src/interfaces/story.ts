export interface Story {
    id: number,
    userID: number,
    title: string,
    longDescription: string,
    imageURL: string,
     actions:{
         likeCount: number,
         dislikeCount: number,
         viewCount: number    
    }   
}
