import { Button, Tooltip } from "@nextui-org/react";
import { useEffect, useState } from "react";

export default function Fab() {
  const [fabVis, setFabVis] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => setFabVis(window.scrollY > 5));
  }, []);

  return (
    <div
      className={`fixed bottom-4 right-4 ${fabVis ? "visible" : "hidden"} transition-all z-50`}
    >
      <Tooltip
        content="Go to top"
        size={"lg"}
        color={"primary"}
        placement={"left"}
        showArrow
      >
        <Button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          isIconOnly
          variant="shadow"
          radius="full"
          size="lg"
          color="primary"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 15.75l7.5-7.5 7.5 7.5"
            />
          </svg>
        </Button>
      </Tooltip>
    </div>
  );
}
