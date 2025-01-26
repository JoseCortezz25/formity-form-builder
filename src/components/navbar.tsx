import { Button } from "./ui/button";

export const Navbar = () => {
  return (
    <header className="flex w-full bg-white">
      <div className="container mx-auto flex w-full justify-between py-6">
        <nav>
          <span className="font-bold text-lg">Form Builder</span>
        </nav>

        <nav>
          <ul className="flex gap-4">
            <li>
              <Button variant="outline">
                Preview
              </Button>
            </li>
            <li>
              <Button variant="default">
                Export code
              </Button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};