import api from '../config/instance';
import ky from 'ky';

import type { Review, ReviewPayload } from '@/types/review';

/**
 * api 나오면 수정
 */
export const getReviews = async (placeId: number) => {
  const { data } = await ky.get('/db/reviews.json').json<APIResponse<{ reviews: Review[] }>>();

  return data;
};

export const getMemberReviews = async (memberId: number) => {
  const { data } = await ky.get('/db/reviews.json').json<APIResponse<{ reviews: Review[] }>>();

  return data;
};

export const postReview = async (payload: ReviewPayload) => {
  const { data } = await api.post<Review>('api/v1/reviews', {
    json: payload,
  });

  return data;
};
