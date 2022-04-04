import { useEffect, useState } from "react"

const useData =()=>{
const [data, setData] = useState([])

    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .the(data => setData(data))
    })
    return [data, setData]
}

export default useData