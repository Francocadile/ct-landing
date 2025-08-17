import { Mail, Instagram, Twitter, Linkedin } from "lucide-react";

export default function StaffCard({ name, role, bio, img, socials = {} }) {
  const { email, instagram, twitter, linkedin } = socials;

  return (
    <article className="group overflow-hidden rounded-2xl border bg-white shadow-sm transition hover:shadow-md">
      <div className="aspect-[4/3] w-full overflow-hidden bg-neutral-100">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={img || "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1200&auto=format&fit=crop"}
          alt={name}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </div>

      <div className="p-5">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-sm text-neutral-600">{role}</p>

        {bio && <p className="mt-3 text-sm leading-relaxed text-neutral-700">{bio}</p>}

        <div className="mt-4 flex items-center gap-3 text-neutral-500">
          {email && (
            <a href={`mailto:${email}`} className="hover:text-neutral-800" aria-label="Email">
              <Mail size={18} />
            </a>
          )}
          {instagram && (
            <a href={instagram} target="_blank" rel="noreferrer" className="hover:text-neutral-800" aria-label="Instagram">
              <Instagram size={18} />
            </a>
          )}
          {twitter && (
            <a href={twitter} target="_blank" rel="noreferrer" className="hover:text-neutral-800" aria-label="Twitter">
              <Twitter size={18} />
            </a>
          )}
          {linkedin && (
            <a href={linkedin} target="_blank" rel="noreferrer" className="hover:text-neutral-800" aria-label="LinkedIn">
              <Linkedin size={18} />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
