import { useEffect, useState } from "react"
import useSWR from "swr"

const fetcher = url => fetch(url).then(res => res.json())

export function useGithubUser(username){
    const {data, error, mutate} = useSWR(username ? `https://api.github.com/users/${username}` : null, fetcher)

    return {
        user: data,
        error,
        isLoad: !data && !error,
        mutate
    }
}