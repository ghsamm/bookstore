import { useEffect, useState } from "react"

const useRequest = <T>(requestFn: () => Promise<T>) => {
    const [data, setData] = useState<T | null>(null)
    const [error, setError] = useState<Error | null>(null)
    const [isLoading, setIsloading] = useState<boolean>(true)
    const [refreshId, setRefreshId] = useState<number>(0)

    const refetch = () => {
        setRefreshId(Math.random())
    }

    useEffect(() => {
        (async () => {
            try {
                const newData = await requestFn()
                setData(newData)
                setIsloading(false)
            } catch (err) {
                setError(err)
            }
        })()
    }, [refreshId])

    return { data, error, isLoading, refetch }
}

export default useRequest