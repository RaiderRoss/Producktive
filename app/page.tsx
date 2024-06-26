import { title, subtitle } from "@/components/primitives";
import {Badge} from "@nextui-org/badge";
import {Avatar} from "@nextui-org/avatar";
import { ThemeSwitch } from "@/components/theme-switch";
export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-lg text-center justify-center">
        <h1 className={title()}>Make&nbsp;</h1>
        <h1 className={title({ color: "violet" })}>beautiful&nbsp;</h1>
        <br />
        <h1 className={title()}>
          websites regardless of your design experience.
        </h1>
        <h2 className={subtitle({ class: "mt-4" })}>
          Beautiful, fast and modern React UI library.
        </h2>
      </div>
      <Badge content="5" color="secondary" placement="bottom-left">
      <Avatar
        radius="md"
        size="lg"
        src="https://i.pravatar.cc/300?u=a042581f4e29026709d"
      />
    </Badge>
    <ThemeSwitch/>
    </section>
  );
}
