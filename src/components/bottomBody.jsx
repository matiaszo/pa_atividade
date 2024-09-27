import Link from "next/link";

export const BottomBody = () =>{
    return(
        <>
            <div className="font-roboto flex justify-between p-2 mt-3">
                <div className="flex justify-between items-center w-44">
                    
                <svg className="bg-grey h-5 rounded-full p-[1.5px] bg-sky-100" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
                <p>
                    Mirrorless cameras
                </p>
                </div>

                <div className="flex items-center justify-between w-24">
                    <p className="border-[0.5px] border-black rounded-3xl p-1">Follow</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
                    </svg>
                </div>
            </div>
        </>
    )
}