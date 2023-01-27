import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { addNewProduct, getProducts } from '../api/firebase';

export default function useProducts() {
  const queryClient = useQueryClient();

  const productsQuery = useQuery(['products'], getProducts, {
    staleTime: 1000 * 60,
  });

  const addProduct = useMutation(
    ({ product, url }) => addNewProduct(product, url),
    // mutate가 성공하면 'product' cache를 가진 query를 invalidate하기
    { onSuccess: () => queryClient.invalidateQueries(['products']) }
  );

  return { productsQuery, addProduct };
}
