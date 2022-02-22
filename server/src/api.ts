import { Like, Post, User } from './types';

// Post APIs
export interface ListPostsRequest {}
export interface ListPostsResponse {
  posts: Post[];
}

export type CreatePostRequest = Pick<Post, 'title' | 'url' | 'userId'>;
export interface CreatePostResponse {}

export interface GetPostRequest {}
export interface GetPostResponse {
  post: Post;
}

// Like APIs
export type CreateLikeRequest = Like;
export type CreateLikeResponse = {
  message: string;
  data: Like;
};
// Comment APIs

// User APIs
export type SignUpRequest = Pick<
  User,
  'email' | 'firstName' | 'lastName' | 'username' | 'password'
>;
export interface SignUpResponse {}

export interface SignInRequest {
  login: string; // username or email
  password: string;
}
export type SignInResponse = Pick<User, 'email' | 'firstName' | 'lastName' | 'username' | 'id'>;