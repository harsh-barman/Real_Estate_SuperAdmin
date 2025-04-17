import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const logoList = [
    {logo: "https://s3-alpha-sig.figma.com/img/2ebc/da0f/cf901c4d754c548ce4bc5a3348e9f707?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=IdjZBRobwmmsJ4-90NtwQ3CU6trmRLKJnocVUf7XbQruhohsQOjfinCIytk~rW9sqriRhYT-TBzm9i8fiT5zDz-x2-Rvup2msDHUI-UZ8tHZ69rf7cdoQK1q6lTATPNTZB8vcaopnzr5DF4C3s8b5VdgIzYWct1T3-nNv1r~r8DBGuVASP6GL-OQOj9PbRMM3Q0c-6xwrjfIKvb0NwJz9MENiP3MfGc4ASYF0tpnXZgqARnUBSC4-KKgLlwUce40e2e9Xe6s6o9t7xCfd6SOz8767cPlmbh4psk0aEh8J0f9Oq79vdhWJ-wpd838myAB7I3icVsccum-VeqikmB4dg__", name: "Name"},
    {logo: "https://s3-alpha-sig.figma.com/img/2083/ef15/aa7ded7bc4b41545cf75202d18070586?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=bWjOBmgWHIrvEcE2kwaqAEaN4HF5r6Tu1c8tNewQq2fa5WJPKm3FUO41IA36SPXDLCPSVxvE7atcRd2tN6JuNHPdqMQ4uy3G5osU~7nG~uWI1qIvrEhETRN29gTCbPZ4yPE7Txx7ZyD4rnvXD5-JQbEjpctKmFpN00fR-8v~-ydExFzIZnR6yCiRUtaLucr89A2qH4PO4-7vv2IJQFh67qaHplWAZ5FcL1t9Hra6wlf4X7-TFCYbq49nOS~Sqaue24k8s8mxz9L3GMXTdbMAumDGaA59vHDJRpNqzmiJEx1bcSmLKfLRH~ldcC6GCR4KJKG0W7IVVTzjhUb4vIuXJg__", name: "Name"},
    {logo: "https://s3-alpha-sig.figma.com/img/8287/67e6/6ab73a19bc1def14c005b24632dbf2d7?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=fkKs3-odGC8V9Ybkb5UBQVUTQoyllEWhg0-UQIweXo4sYxp18FmIYnIUrgTDtQJZhZFv9yp5LRdvglUO5NHx0qCUnomIKVpyPfIoUe67-5BvPQdLCDcHXsHF-95oFz6FvC3ESvlt4UCrDC6s4CcEQHVO9IMiOkRbLt~geCHKp58facVxyAq2ivCELm6-sPu48F4om6UGNzbzd2eIdt~9lHWHIvyMJBhuSJnx9nbJUAyb522M6b11i5~4L~gikfLiXaukaLPdOGIBJCStHyDc--Vrjwmru4xTo3qDBLEk5GwNxFhHg3p10Nm9kffOfaMff5RqUHZ~hipgbhn2azrD9g__", name: "Name"},
    {logo: "https://s3-alpha-sig.figma.com/img/3a71/9c6a/2e2944981b17212a726b8bdebb2794fd?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=LHWVX2HK3MbmKDt~l5kUdKObf0FH4oXCWfWbdgCHmb~Essg0bm99dRlSGPd7cyKyKysakzYPamh4FdwjHHFSFIxNOZPVhzD-kYbsR9MrI25GLbYmM7UL6VALMZBGXxIXepEgMKQNRaEUzvbQ23B97rYLJKRwPQwzAMSrAGq4Tno~dnMSmr-i9YesTbpu0dZrUe5n1Z14KvDAtmuJdXhM5PZodc66Ot-fV5ueEoKBOpMYefHCxClwvdbU123lpmTLQ5ZLTUV3~vGhMWMOYdI1vvpvAm4b5nNxfv4lMRoHCeSLz3eQWJLAKAZUylsbztrkTvuz3JzrYmGrbq4p4upPUA__", name: "Name"},
    {logo: "https://s3-alpha-sig.figma.com/img/7b65/fd88/2b1ad3562adfea82fe5bf87dc8ef1a03?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=MFRXyg4qxrU4RrPkNFRZN3pBUVePDwSqjJFe-O3raE1Tof9KPnXO~zKKfoC97W6ZYuxfXpx2MJiAgEmu580Ep-8lK9TpoU4QyBLNHu91WqINIHGoqwwewyrwvZojZnQp22HxWgGBmhybf7YyErRyEQmnj9vRk1WK2Hp~4yq-T0omOhWE~6MZibHEXoejRIB7OEXV3FOt8igFgZP8zMThy5UBKoCtO9xvs-Ao33M2XH8AYfmV-yHJ-7q2mEir3TYlAhWg6JtOp~7cNiOZEn0y5S-cRE0dC~WYSFC~ki~v8xrZb2eoNMoXGScbN6hm5YadaKwkqmN5-n-IXzdMPrilVg__", name: "Name"},
    {logo: "https://s3-alpha-sig.figma.com/img/c578/e897/183e0346cd08f01305146d2bff0d2799?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=KBAOMJHa4weKZ5tn8LysJfpge4PVJ4suZflom7nNq6cYxwQ~Lo~YuWDq1haY5p9JwpoKQqUl5mcyDz18zdaClQEqyrduhcrh1o-NQTF3V69bohrlhGeQ4krtCMVbMtOwwwJ9Njv6h~tzUgltCgeXnt0nT~Gi85rCdP9Co-9IRn349YO6x0lukYLCBsw9h25o1sGPvyrOMq0-Uvl~g8YAGuVlTcwfjkGCySWnKrYSEb00trAg9er3cAFwDHz3mzRZCFNbYxbic2rFgZQEyVoEvmc0FMc-j~tY91a0~bYWzrOfNsCayrxGk-Rf5jFsT1k8t52Yu~NytsqBto23bwdzIQ__", name: "Name"},
    {logo: "https://s3-alpha-sig.figma.com/img/fd38/e360/3f242bafd00724304b888de6e9c993ad?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=E99VtGN24yk3p3fyUUtTzmpV0MajJWDdx27ihMOLaEbt7AyjxOumrEnl8Dkv-Paruo-JPljvl3XAMgVn1ol8Z-Tyl7n6vT-WnowALQ9Qcpt6WxcdHcAY7~1HUxAbsYSeKch1OrKU1AX2qDlabJMay0-Q2Y9PoPCPLiCMuv6UEgyvP9UW3VMoOH-OJ1cgk36qUWNggYlMVibgfNvBc4Et0DG44j-qAjnopxEESrXwKlYnXHH-oJL70~WrAQPqRjHxUta4EvDS29-fNLvDKr5oZC-yluohd1xSluI0Lk0P-izC5dB~rR3DHYLcdfXekgBYEBLK4LAu0oBLdGFN~VOEdA__", name: "Name"},
    {logo: "https://s3-alpha-sig.figma.com/img/893b/1053/58540d9bb96a390c547b3cebcab8ad8e?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=c5EsrhrKYjEv41krqifIa1f8cuQpslwjpF6zrwzuN9XMJuAEC2-JPmfhWA1uVeBE7nL9jMHLk02bZOc3WtszZZ9c0CyxYXhaf3C0S7K1LYW1G-O6eAb~Jb00slwh8H4AdteE2TJp3KZJbX087DTufAYh55OtVVYPolNN5BclUSH-dGYfgUg7pr8uwVR2bAeIgP617IgJaR14URLmIFCriOx-ljPGpeXj7AQEWbaPy0uau4DQ-epbAJnlL25hPfPMYscvzv6N7N1m~p6RXs3eCL9iKytd2xdfzxQE6uUoNDWxHHVeZwzov7ctGn5NQMXqOfmjEHJDOudobGRidJlsEg__", name: "Name"},
    {logo: "https://s3-alpha-sig.figma.com/img/226c/40e3/a0a4ac04967e5733fbc6967100a742d2?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Rz0e96wlS2cSGVRiLmHefcII~-EHDjh5W4ZZN38I~EQwsflPS2l1Agd5EerggcC7jB3~e66bunYYEUPGnmdNOtSpf1QDEGEuNVaHBuLFJPfvm0UBjPXaR1Iq0IUEV5gCyTGwyB48PKw7CWK89kfWSQV6QkF~Tlm6v3wPm2aHpxb56mk79-ADBTEZDY~GOGsCey9U1LgBsDzSC8aa9I36wpuMLmHoCxD8FcXNInW1jZ35fGNkQKDTXeYw4ru55lHg2Zo9MGdrs48l2vuMVPpyPFpma~3erj75~VeoPrhn18EBeyKbylVEuJlWvnFt6UGlXjiACQqkAXTRvuTWTRB4AA__", name: "Name"},
    {logo: "https://s3-alpha-sig.figma.com/img/022f/e96f/06d35427ad75f56a312a1629b3f8bd6d?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=fLId-qb1fWZWKA2PbYjpprcqNQeasy87TSJDMWHub5zBZ1wq2DkLdj5koYewcvQkzjkUgU9qNHP6sIfdhT4y0h7b9F6gyK5gDsMDq1mDKuTR7ieftrSIEVJ21vBsSL-sDPsylqW704236xGjdHBHm9UbTiY2-LupY~~HafN9kOKWY-WlM4rp29X-YT3kFu24kGoDRAZmEePb43tPkfuftx0ASUjSevgUj~rkYIRKujwP0EVNyvMqXQarzWpD-mFiuxZ9lb0tBKBp8crx1NFEH4QpsX0fEGTtqJtyWo1W5WFhxMftk2vpp05OL-mL8xo9fd~jhaJ-eDXkbs2Q5dhTeA__", name: "Name"},
    {logo: "https://s3-alpha-sig.figma.com/img/44f6/a0f7/1d8b6562f6e2472099b4e0b352932674?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=TBv7bPRYtLI9k~r-~exUc-QidT54cTW7U8UVUGhGY~Jb~wjqw6neuT7S~iduKzarPuWcLp4AD8GPr2mC7CjhTctehX80S7183ZkRqBbBX3Qr23BSQW72M2dnZt4tdMqJ4E55WGhUIik6bkCwR~b5gpfim189vwDL14GqrHsoe5pqsfDyl9rXzewnyWKZH7faBJ5Xq8HyF4SXOTdJQTLMoXB5EOWYPjop-H7eG63WjMZgT61B4md9ChyvmOUYiTjpEdjPfPH0AyVmD8h-tqIZMkL5DLtTqX5sxL9-cPDmHFQ6Dt9aU1NMhbzkWvMluw1EEklhJe0oJ6C74iMARIy2ZA__", name: "Name"},
    {logo: "https://s3-alpha-sig.figma.com/img/ce61/ae08/653f3bf285ba7d977c2f3659e8df70d4?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=inQ3fCV4rLNmc4K0~pTF~EQXk05S14h8cO4rIQ~LZ4EVz~JCUnJoEbGKqkB2AZlvBKs~o6I5hww2YDJ~rsdYPYtKJ3YL6w-9RhoyYwxBKGi~H2~~XM01LsYogW2ajMe8CbqZlceXFNNMy7N8pACNFUFFzw9XB88fChlHabRDGXyAv7bELMTDs9e-gyHZBORPtV9-qGz0ndnkN64SkXbHBJRitleoGo1sw1URwdyA-GVqVGiHxRjkdM~ukwBkaQQza5Orb9TaJNl6Z0HKZQLZuMvKdEC81qS~9eZzhW12lgaYeVdid07Q4SEvUpFtatKDKOVpatPNePIs6IS3L-EFag__", name: "Name"},
]

const InfiniteLogoScroller = () => {

    const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let scrollAmount = 0;

    const scroll = () => {
      if (scrollContainer) {
        scrollAmount += 1;
        if (scrollAmount >= scrollContainer.scrollWidth / 2) {
          scrollAmount = 0;
        }
        scrollContainer.scrollLeft = scrollAmount;
      }
    };

    const interval = setInterval(scroll, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='w-full pt-10 overflow-hidden relative'>
      <div ref={scrollRef} className='w-full flex gap-10 whitespace-nowrap overflow-hidden'>
        {[...logoList, ...logoList].map((ele, index) => (
          <motion.div key={index} className='flex flex-col text-center gap-4 min-w-max'>
            <img src={ele.logo} alt="logo" className='size-25 rounded-full' />
            <p className='text-lg text-[#00A58E] font-[600]'>{ele.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default InfiniteLogoScroller
