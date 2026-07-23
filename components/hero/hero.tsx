import Container from "@/components/ui/container";
import Button from "@/components/ui/button";
import { typography } from "@/lib/typography";

export default function Hero() {
  return (
    <section>
      <Container>
        <div className="flex flex-col items-center justify-between gap-16 lg:flex-row lg:justify-between">
        <div className="w-full lg:w-1/2">

          <p>
            Engineering Digital Products That Drive Growth
          </p>

          <h1 className={typography.display}>
            We Build Software That Helps Businesses Move Faster.
          </h1>

          <p>
            From modern websites to scalable web applications and
            AI-powered solutions, Orythyn partners with ambitious
            businesses to design, build and grow digital products.
          </p>

          <div>

            <Button variant="primary">

                Book a Strategy Call

            </Button>

             <Button variant="secondary">
              View Our Work
            </Button>

          </div>

          <div>

            <p>✓ Fast Delivery</p>

            <p>✓ Modern Technology</p>

            <p>✓ Built for Scale</p>

          </div>

        </div>

        <div className="flex h-96 w-full items-center justify-center rounded-2xl border-2 border-dashed border-gray-300">
            Future Hero Illustration
        </div>
        </div>
      </Container>
    </section>
  );
}