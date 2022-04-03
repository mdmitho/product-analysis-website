import { useEffect, useState } from "react"

const useLaptop = () =>{
    const [coment,setComent] = useState([])

    useEffect(()=> {
        fetch('laptop.json')
        .then(res => res.json())
        .then(data => setComent(data))
    },[])
    return [coment , setComent]
}
export default useLaptop