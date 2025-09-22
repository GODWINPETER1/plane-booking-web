import { FC , JSX } from "react";
import { ShieldCheck , Headphones , CreditCard , Globe} from "lucide-react";


interface TrustFeatures {
    id: number;
    title: string;
    description: string;
    icon: JSX.Element;
}

const features: TrustFeatures[] = [
  {
    id: 1,
    title: "Best Price Guarantee",
    description: "We offer the most competitive prices for flights and hotels worldwide.",
    icon: <CreditCard size={32} className="text-blue-600" />,
  },
  {
    id: 2,
    title: "24/7 Customer Support",
    description: "Our travel experts are available around the clock to assist you.",
    icon: <Headphones size={32} className="text-blue-600" />,
  },
  {
    id: 3,
    title: "Secure & Reliable",
    description: "Your bookings are safe with our top-notch security system.",
    icon: <ShieldCheck size={32} className="text-blue-600" />,
  },
  {
    id: 4,
    title: "Worldwide Coverage",
    description: "Book flights, hotels, and cars across 190+ countries.",
    icon: <Globe size={32} className="text-blue-600" />,
  },
];

export const TrustSection: FC = () => {

    return (

        <section className="bg-gray py-16 px-6 md:px-12 lg:px-20">
            <div className="max-w-7xl mx-auto text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
                    Why Choose <span className="text-blue-600"> gAirline</span>
                </h2>

                <p className="mt-3 text-gray-600">
                    Your trusted partner for flights, hotels, and travel packages.
                </p>

            </div>

            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">

                {
                    features.map((feature) => (

                        <div key={feature.id} className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300">
                            <div className="mb-4"> {feature.icon} </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                {feature.title}
                            </h3>
                            <p className="text-sm text-gray-600"> {feature.description} </p>
                        </div>
                    ))
                }

            </div>

        </section>
    )
}