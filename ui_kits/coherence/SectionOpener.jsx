/* Coherence UI Kit · SectionOpener
   The brand's standard eyebrow + heading + dek block. */

const SectionOpener = ({ eyebrow, title, dek, align = "left" }) => (
  <div style={{
    textAlign: align,
    maxWidth: align === "center" ? "720px" : "100%",
    margin: align === "center" ? "0 auto" : 0
  }}>
    {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
    <h2 className="section-h2">{title}</h2>
    {dek && <p className="section-dek">{dek}</p>}
  </div>
);

window.SectionOpener = SectionOpener;
