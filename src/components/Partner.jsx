import React from 'react'
import logos from '../exportAssets/imageExport'
//{nasa, google, ibm, martin, consensys, fidelity, suisse, fargo
export default function Partner() {
  return (
    <div className='partner'>
        <h2 className='partner-title'>Engineered by a World-Class Team & Distinguished Partners</h2>
        <span className='partner-describe'>Our breakthroughs are crafted by a team of experts in technology, and academia, alongside globally recognized partners, setting new standards in innovation</span>
        <div className='partner-logos'>
            <img alt='' className='companyLogo' src={logos.nasa}/>
            <img alt='' className='companyLogo' src={logos.google}/>
            <img alt='' className='companyLogo' src={logos.ibm}/>
            <img alt='' className='companyLogo' src={logos.martin}/>
            <img alt='' className='companyLogo' src={logos.consensys}/>
            <img alt='' className='companyLogo' src={logos.fidelity}/>
            <img alt='' className='companyLogo' src={logos.suisse}/>
            <img alt='' className='companyLogo' src={logos.fargo}/>
        </div>



    </div>
  )
}
