import { Button } from "@/components/ui";
export default function NotFound() {
  return (
    <section className="page-heading container">
      <div className="eyebrow">404 / PAGE NOT FOUND</div>
      <h1>Let’s find your way back.</h1>
      <p>The page you’re looking for is unavailable.</p>
      <Button href="/">RETURN HOME</Button>
    </section>
  );
}
