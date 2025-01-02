import ImpactBg from "../../../assets/images/impactmetricsBG1.jpg"
import CountUp from 'react-countup';


const ImpactMetrics = () => {
  return (
    <div className="h-screen bg-cover bg-center bg-no-repeat relative" style={{backgroundImage: `url(${ImpactBg})`}}>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
        {/* Content */}
        <div className="relative z-10 text-white h-full"> {/* Content Container */}
            <div className="h-full px-7 md:mx-32 py-40 md:p-32 flex flex-col gap-52">{/* Metrics Container */}
                <div className="flex flex-row justify-between "> {/* First row Metrics Container */}
                    <div className="flex flex-col justify-center items-center"> {/* First Metric Container */}
                        <CountUp end={4} className="text-6xl font-extrabold" suffix="+" />
                        <p className="text-xl font-medium">Years of Impact</p>
                    </div>
                    <div className="flex flex-col justify-center items-center"> {/* First Metric Container */}
                        <CountUp end={4} className="text-6xl font-extrabold" />
                        <p className="text-xl font-medium">Batches Trained</p>
                    </div>
                </div>
                <div className="flex flex-row justify-between"> {/* Second row Metrics Container */}
                    <div className="flex flex-col justify-center items-center"> {/* First Metric Container */}
                        <CountUp end={100} className="text-6xl font-extrabold" suffix="+" />
                        <p className="text-xl font-medium">Alumni</p>
                    </div>
                    <div className="flex flex-col justify-center items-center"> {/* First Metric Container */}
                        <CountUp end={4} className="text-6xl font-extrabold" suffix="+" />
                        <p className="text-xl font-medium">Years of Impact</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ImpactMetrics
