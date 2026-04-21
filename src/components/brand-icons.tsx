/**
 * Brand SVG paths via simple-icons. We render with currentColor so they match the theme.
 */
import {
  siGoogle,
  siCoursera,
  siHuggingface,
  siKaggle,
  siHackerrank,
  siGithub,
  siLinkedin,
  siMedium,
} from "simple-icons";

type IconProps = React.SVGProps<SVGSVGElement> & { title?: string };

function makeIcon(path: string, defaultTitle: string) {
  return function BrandIcon({ title, ...props }: IconProps) {
    return (
      <svg
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        role="img"
        aria-label={title ?? defaultTitle}
        {...props}
      >
        <title>{title ?? defaultTitle}</title>
        <path d={path} />
      </svg>
    );
  };
}

export const GoogleBrand = makeIcon(siGoogle.path, "Google");
export const CourseraBrand = makeIcon(siCoursera.path, "Coursera");
export const HuggingFaceBrand = makeIcon(siHuggingface.path, "Hugging Face");
export const KaggleBrand = makeIcon(siKaggle.path, "Kaggle");
export const HackerRankBrand = makeIcon(siHackerrank.path, "HackerRank");
export const GithubBrand = makeIcon(siGithub.path, "GitHub");
export const LinkedinBrand = makeIcon(siLinkedin.path, "LinkedIn");
export const MediumBrand = makeIcon(siMedium.path, "Medium");

// Microsoft & DeepLearning.AI: not available as a single-color path in simple-icons in the same way, but siMicrosoft is. Provide custom for DLAI.
import { siMicrosoft } from "simple-icons";
export const MicrosoftBrand = makeIcon(siMicrosoft.path, "Microsoft");

// DeepLearning.AI logomark (stylized "brain" mark using a generic mark — fallback monogram)
export function DeepLearningBrand({ title, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      role="img"
      aria-label={title ?? "DeepLearning.AI"}
      {...props}
    >
      <title>{title ?? "DeepLearning.AI"}</title>
      <path d="M3 5h4.5L12 14.2 16.5 5H21l-7.2 14h-3.6L3 5Z" />
    </svg>
  );
}

export type BrandKey =
  | "google"
  | "microsoft"
  | "coursera"
  | "deeplearning"
  | "huggingface"
  | "kaggle"
  | "hackerrank";

export function BrandIcon({ brand, ...props }: { brand: BrandKey } & IconProps) {
  switch (brand) {
    case "google": return <GoogleBrand {...props} />;
    case "microsoft": return <MicrosoftBrand {...props} />;
    case "coursera": return <CourseraBrand {...props} />;
    case "deeplearning": return <DeepLearningBrand {...props} />;
    case "huggingface": return <HuggingFaceBrand {...props} />;
    case "kaggle": return <KaggleBrand {...props} />;
    case "hackerrank": return <HackerRankBrand {...props} />;
  }
}
