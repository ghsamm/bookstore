import { useEffect, useState } from "react"

const useRequest = <T>(requestFn: () => Promise<T>) => {
    const [data, setData] = useState<T | null>(null)
    const [error, setError] = useState<Error | null>(null)
    const [isLoading, setIsloading] = useState<boolean>(true)

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
    }, [])

    return { data, error, isLoading }
}

export default useRequest