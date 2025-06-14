import Footer from "./Footer";

export default function FooterPoem() {
  return (
    <>
      <div className="text-center py-8 px-4">
        <h2 className="text-xl font-light text-foreground mb-4">
          Six windows. One quiet world.
        </h2>
        <p className="text-base text-muted-foreground max-w-lg mx-auto mb-2">
          Watch the present moment unfold across cities.
        </p>
        <p className="text-sm text-muted-foreground opacity-75">
          With gentle music. No distractions. Just now.
        </p>
      </div>
      <Footer />
    </>
  );
}