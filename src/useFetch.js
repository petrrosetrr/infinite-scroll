import {useCallback, useEffect, useState} from "react";
import axios from "axios";

export default function useFetch(url) {
    const [data, setData] = useState({status: 'pending', data: []})
    const getData = useCallback(async () => {
        try {
            const resp = await axios.get(url);
            setData({data: resp.data, status: 'fulfilled'});
        }
        catch (e) {
            setData({data: [], status: 'rejected'});
        }
    }, [url]);

    useEffect(()=> {
        getData();
    }, [getData, url]);
    return data;
}
