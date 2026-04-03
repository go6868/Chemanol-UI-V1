import imgRectangle1 from "figma:asset/c3b2bdf4e2e2a18665fea9ec208470b2d7063548.png";

export default function MaskGroup() {
  return (
    <div className="relative size-full" data-name="Mask group">
      <div className="absolute bg-white h-[1043px] left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[1696px_1043px] top-0 w-[1696px]" style={{ maskImage: `url('${imgRectangle1}')` }} />
    </div>
  );
}