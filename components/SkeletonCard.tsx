export default function SkeletonCard() {
  return (
    <div
      className="bg-[#141414] border border-[#2A2A2A] animate-pulse"
      style={{ borderRadius: "2px" }}
      aria-hidden="true"
    >
      {/* Thumbnail skeleton */}
      <div className="w-full aspect-video bg-[#1E1E1E]" />
      {/* Content skeleton */}
      <div className="p-4 space-y-3">
        <div className="flex justify-between">
          <div className="h-4 w-20 bg-[#1E1E1E] rounded-sm" />
          <div className="h-4 w-16 bg-[#1E1E1E] rounded-sm" />
        </div>
        <div className="h-5 w-3/4 bg-[#1E1E1E] rounded-sm" />
        <div className="h-3 w-1/2 bg-[#1E1E1E] rounded-sm" />
        <div className="space-y-1">
          <div className="h-3 w-full bg-[#1E1E1E] rounded-sm" />
          <div className="h-3 w-5/6 bg-[#1E1E1E] rounded-sm" />
        </div>
        <div className="h-8 w-24 bg-[#1E1E1E] rounded-sm" />
      </div>
    </div>
  );
}
