import 'react-loading-skeleton/dist/skeleton.css'
import Skeleton from 'react-loading-skeleton'


const CountryDetailSkeleton = () => (
    <div className="flex flex-wrap justify-between items-center w-full">
        {/* <img className="w-4/5 max-w-xl rounded-md mx-auto"/> */}
        <div className='mx-auto rounded-md'>
            <Skeleton height={244} width={488} baseColor='#bfbfbf' highlightColor='#f5f5f5' />
        </div>
        <div className="flex flex-col grow m-9">
            <div className="p-4 font-bold text-xl border-b-2 border-DarkBlue w-full"><Skeleton width={200} baseColor='#bfbfbf' highlightColor='#f5f5f5' /></div>
            <div className="flex flex-wrap max-w-xl ">
                <div className="w-1/2 p-4">
                    <span className="font-medium mx-3"><Skeleton width='30%' inline={true} baseColor='#bfbfbf' highlightColor='#f5f5f5' /></span>
                    <span className="font-light mx-3"><Skeleton width='30%' inline={true} baseColor='#bfbfbf' highlightColor='#f5f5f5' /></span>
                </div>
                <div className="w-1/2 p-4">
                    <span className="font-medium mx-3"><Skeleton width='30%' inline={true} baseColor='#bfbfbf' highlightColor='#f5f5f5' /></span>
                    <span className="font-light mx-3"><Skeleton width='30%' inline={true} baseColor='#bfbfbf' highlightColor='#f5f5f5' /></span>
                </div>
                <div className="w-1/2 p-4">
                    <span className="font-medium mx-3"><Skeleton width='30%' inline={true} baseColor='#bfbfbf' highlightColor='#f5f5f5' /></span>
                    <span className="font-light mx-3"><Skeleton width='30%' inline={true} baseColor='#bfbfbf' highlightColor='#f5f5f5' /></span>
                </div>
                <div className="w-1/2 p-4">
                    <span className="font-medium mx-3"><Skeleton width='30%' inline={true} baseColor='#bfbfbf' highlightColor='#f5f5f5' /></span>
                    <span className="font-light mx-3"><Skeleton width='30%' inline={true} baseColor='#bfbfbf' highlightColor='#f5f5f5' /></span>
                </div>
                <div className="w-1/2 p-4">
                    <span className="font-medium mx-3"><Skeleton width='30%' inline={true} baseColor='#bfbfbf' highlightColor='#f5f5f5' /></span>
                    <span className="font-light mx-3"><Skeleton width='30%' inline={true} baseColor='#bfbfbf' highlightColor='#f5f5f5' /></span>
                </div>
                <div className="w-1/2 p-4">
                    <span className="font-medium mx-3"><Skeleton width='30%' inline={true} baseColor='#bfbfbf' highlightColor='#f5f5f5' /></span>
                    <span className="font-light mx-3"><Skeleton width='30%' inline={true} baseColor='#bfbfbf' highlightColor='#f5f5f5' /></span>
                </div>
                <div className="w-1/2 p-4">
                    <span className="font-medium mx-3"><Skeleton width='30%' inline={true} baseColor='#bfbfbf' highlightColor='#f5f5f5' /></span>
                    <span className="font-light mx-3"><Skeleton width='30%' inline={true} baseColor='#bfbfbf' highlightColor='#f5f5f5' /></span>
                </div>
                <div className="w-1/2 p-4">
                    <span className="font-medium mx-3"><Skeleton width='30%' inline={true} baseColor='#bfbfbf' highlightColor='#f5f5f5' /></span>
                    <span className="font-light mx-3"><Skeleton width='30%' inline={true} baseColor='#bfbfbf' highlightColor='#f5f5f5' /></span>
                </div>
            </div>
        </div>
    </div>
            // 488 244
)

export default CountryDetailSkeleton