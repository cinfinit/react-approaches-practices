import { useRequest as ahookUseRequest}  from 'ahooks';

// ----------------------------------------------------------------------


export default function useRequest(url) {
    return ahookUseRequest(async () => {
        const response = await fetch(url, {
            method: 'GET',
        });
        return await response.json();
    });

}
