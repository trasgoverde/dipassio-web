import { useRouter, useSearchParams } from 'next/navigation';

const Page = async () => {
    const router = useRouter()

    const searchParams = useSearchParams()
    const origin = searchParams.get('origin')

    const { data, isLoading } = trpc.test.authCallback.useQuery(undefined,  {
        onSuccess: ({success})  => {
            if(success) {
                router.push(origin ? `/${origin}` : '/dashboard')
            }
        }
    }) 
}

export default Page