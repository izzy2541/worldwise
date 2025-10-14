import { useSearchParams } from "react-router-dom";

export function useUrlPosition() {
    //returns an array that contains the current stat
    const [searchParams] = useSearchParams();
    const lat = searchParams.get("lat");
    const lng = searchParams.get("lng");

    return [lat, lng];
}