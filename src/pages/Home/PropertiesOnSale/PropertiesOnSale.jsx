import React from 'react'
import { BsHeartFill } from "react-icons/bs";


const propertiesSales = [
    { title: "Card title", location: "Sub Heading", img: "https://s3-alpha-sig.figma.com/img/04f7/61fc/64442e486605c5e45daef647f20e1af5?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=l9xD-C3ZTd0Y9W~89aFqdG9lvBWsUdN-dB5OFANpXIus2uJOFKUAn523KxbeC22Lbg6POjZ5Ituv5XMtrCDHBqJoK4lwOTvpeHA8u8gUt3SeBqJCTmg7FoUQUPdxJHKedFaYvF1QKijd-HwDh0J3v9vhqXxpFZTxi-4oTtnlhN8BMby1j0v8nESK~xSaz3XCnzHxpJJsqu6-CeTt5g3tbFKTFgayHOGH2lXOsi7jJT~MoalVO2Lnq8C7ZxtGN7WUFvY6okNUhNgNS2kajyL-GLRHWVuUDI8581CoNr~rXkfwc1kbWD5wGWfNs4TQ4pzGMODEjB29IFnVaIpqrx8UWg__" },
    { title: "Card title", location: "Sub Heading", img: "https://s3-alpha-sig.figma.com/img/5b18/9e3c/acb6f266ac63fbe0f8c92bd444b48850?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=kDkwoqellknY3tC5Pzolwi1Ed4Pr-qwE8ntM7ttpSy12-~kh0elUg4YjWqCRGFkzw-WDnHkUMU12f1bUOsekuVa8kM0ltKYe7bgpRZl~oXd0Jg91si2dZYX~ZOkPrCRumScw6sy-Lmd2u8cePGQ-1eySEz0fTM3yE4xVjathWgp6qtfm9Eb2HzfFHR8JrNYkNPRu-xMifMeoNiHMt5hDYdPMqjwGibxnyOyMizl3H0JiAMUekx5c~~pmO25QmfirTYSxS8a-qlK9ygMhV9Rfa9jqwL71XXovnFTM5ojBteNpPM6PqSeDLkN-z23aGJCy-z5zHACqJIcWFyxW0A5lLw__" },
    { title: "Card title", location: "Sub Heading", img: "https://s3-alpha-sig.figma.com/img/de55/bea4/49c4023930ae0d7885f8efbe47f40577?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=SGoMA-0FX8dGJ7Fg9sARXlMrhZS~JUrXi~gUYgNJ5Lh--ZOQ9R-AyvkKZM4jQhMau6pSlcldvCbQ5Su0~F7Er7FbH1PRFQCLFXjGwPCeN~tMgN~win0wuJoCpeqfeQWoBqtr0IYAH9-0Uc-yf5jxGvss3LFI-YYQe~qjAGvaEYPWhxM78fAw1NEk~EEP6lZpvYQQEruyia10aNyZlJFWldZeUv7-Ajd11UpJKzIbQLt~NUqXRRw3MiBU6A4DDo5qHcdnwkm~PW6HCX7U2CPj5IZ9lb8sB5XiS7Gc37GgteYEmEdd0hYnZj4HJVOHNmfrTSOBy7lNIsI0kAgmS3odOg__" },
    { title: "Card title", location: "Sub Heading", img: "https://s3-alpha-sig.figma.com/img/6134/dff5/75a6274be20c0e3050930da92893e1f6?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=s2KSdXkm6zFGTy9FncdYIc78JREEkGxVBMlg-Wrl1lRTkEA0o41tgPjREXvzJ~nOKhVJm8NQKDjOIBgtqC2uQbCTBzdnV-JSLD8o0TfgWWUxuy3Wutvvr8LXUTTv2bdK6bE-gtuREwE3RAGKDCmeoT6l5e16YxBTB9O8qgdxHO6pFXCH7HR4ZW-JlGb2ATeWQR7~y8Jm49b0gcetrGiWpagYBnV7ns0umK1oWHkpgHOhjbtKHD~IRHk1Ouj1kKJy9iv8mWJtsLPsfiYISoyOxbv1YcNHbRteVveUJ3tPl8Dgcki5uErvlOY8qi2w8V1FLmS9Guszc35vr7TlZ8ag0g__" },
    { title: "Card title", location: "Sub Heading", img: "https://s3-alpha-sig.figma.com/img/2973/b030/3106a2c80a24ecd239868405b4c33500?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=gJTT-ZhyLcIyfA6VSoApXkyRNHKSedIYfqojDV8LmWeEBiX0VXTqMLRtQInPocLnoXPVc-WFllmoIEtwr-AhCeNIST0zkadMxeyNuo~1nsd1Vg235utPs34hJ4xMcYro6lj-8JqJCcltWI4Og0T1ER-XGpOxjP1GLmwrZiGdF9ckUcFBONot6ja2ZMrOtklBfNuMSX1LfUm1NxfelFMrjhgGzCraXNJMhztxEM2QvLU5K~ehX7OlOz6FBwlY2VzHYGUQCjNpS6hR1SA62N2QAtv~6jqeDnohT4bHRs7xrX4sOMdThIdZ0hlGCO92AOzu5taK3DUYxv7H9PqBj1Db3g__" },
    { title: "Card title", location: "Sub Heading", img: "https://s3-alpha-sig.figma.com/img/5b18/9e3c/acb6f266ac63fbe0f8c92bd444b48850?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=kDkwoqellknY3tC5Pzolwi1Ed4Pr-qwE8ntM7ttpSy12-~kh0elUg4YjWqCRGFkzw-WDnHkUMU12f1bUOsekuVa8kM0ltKYe7bgpRZl~oXd0Jg91si2dZYX~ZOkPrCRumScw6sy-Lmd2u8cePGQ-1eySEz0fTM3yE4xVjathWgp6qtfm9Eb2HzfFHR8JrNYkNPRu-xMifMeoNiHMt5hDYdPMqjwGibxnyOyMizl3H0JiAMUekx5c~~pmO25QmfirTYSxS8a-qlK9ygMhV9Rfa9jqwL71XXovnFTM5ojBteNpPM6PqSeDLkN-z23aGJCy-z5zHACqJIcWFyxW0A5lLw__" },
]

const PropertiesOnSale = () => {
    return (
        <div className='flex w-full h-110 relative mb-10'>
            <div className='w-[50%] h-100 bg-[#E8EDF1] rounded-2xl pl-10 pt-4 absolute z-1 shadow-md'>
                <p className='text-[#00A58E] text-4xl font-bold '>Properties on Sale</p>
            </div>

            <div className='w-full z-2 absolute top-18 pl-2'>
                <ul className='w-full flex gap-6 overflow-x-scroll whitespace-nowrap no-scrollbar'>
                    {
                        propertiesSales.map((ele, index) => (
                            <li
                                key={index}
                                className="w-[30%] min-w-[340px] h-100 flex flex-col rounded-lg border border-[#007A69] bg-white shadow-md"
                            >
                                <img src={ele.img} alt={ele.title} className="h-1/2 w-full object-cover rounded-t-lg" />

                                <div className="h-1/2 p-4 border-t border-[#007A69] rounded-b-lg flex flex-col gap-4">
                                    <div className='h-[80%] w-full relative flex flex-col gap-1'>
                                        <p className="text-[#00A58E] text-lg font-bold">{ele.title}</p>
                                        <p className="text-[#697D95] text-sm font-bold">{ele.location}</p>
                                        <p className="text-sm text-[#697D95] whitespace-normal text-justify">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ad laboriosam suntillo. Ab cupiditate labore dignissimos.
                                        </p>
                                        
                                        <BsHeartFill size={32} color='#F1474A' className='absolute p-1 border-2 border-[#00A58E] rounded right-0 justify-end'/>
                                        
                                    </div>

                                    <div className='h-[20%] text-l flex gap-4 font-bold'>
                                        <button className='text-white bg-[#00A58E] border-2 border-[#00A58E]  px-2 py-1 rounded'>Send Enquiry</button>
                                        <button className='text-[#00A58E] border-2 border-[#00A58E] px-2 py-1 rounded'>Schedule Visit</button>
                                    </div>

                                </div>
                            </li>

                        ))
                    }
                </ul>
            </div>


        </div>
    )
}

export default PropertiesOnSale
