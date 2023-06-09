import { useInView } from "react-intersection-observer";
const Subtitle = ({ subtitle }: { subtitle: string }) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <div ref={ref} className="overflow-y-hidden">
            <h2
                className={`duration-[700ms] ${
                    inView
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-[100px]"
                }`}
            >
                {subtitle}
            </h2>
        </div>
    );
};

export default Subtitle;
