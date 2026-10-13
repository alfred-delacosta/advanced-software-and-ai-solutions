"""Render ASAIS logo options, lockups, favicons, OG, and the X ad."""

from __future__ import annotations

import math
import shutil
from pathlib import Path

from PIL import Image, ImageDraw, ImageFilter, ImageFont

ROOT = Path(__file__).resolve().parents[1]
PUBLIC = ROOT / "public"
BRAND = PUBLIC / "brand"
CONCEPTS = BRAND / "concepts"
FONTS = PUBLIC / "fonts"
APP_ICON = ROOT / "app" / "icon.svg"

NAVY = "#0b1220"
BLUE = "#0b6dff"
GOLD = "#c9922e"
PAPER = "#f4f6f8"
INK_PAPER = "#e8eef7"
VOID = "#070b12"
SURFACE = "#0e1522"
SOFT_BLUE = "#2563eb"
LINE = "#d7dde5"
LINE_DARK = "#1c2738"

SESSION_IMAGES = Path(
    r"C:\Users\AJ\.grok\sessions\C%3A%5CUsers%5CAJ\01a0b236-7813-7c43-a470-24b8e536888e\images"
)


def star_points(cx: float, cy: float, r_out: float, r_in: float, n: int = 5) -> str:
    pts: list[str] = []
    for i in range(n * 2):
        r = r_out if i % 2 == 0 else r_in
        a = -math.pi / 2 + i * math.pi / n
        pts.append(f"{cx + r * math.cos(a):.2f},{cy + r * math.sin(a):.2f}")
    return " ".join(pts)


def svg_doc(body: str, label: str = "ASAIS") -> str:
    return (
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" '
        f'role="img" aria-label="{label}">\n{body}</svg>\n'
    )


def option1_apex(on: str = "light") -> str:
    """Rounded navy badge, split A, gold bar. Site palette."""
    if on == "dark":
        bg, left, right = INK_PAPER, NAVY, BLUE
    elif on == "mono-ink":
        bg, left, right, gold = "none", NAVY, NAVY, NAVY
        return svg_doc(
            f'  <rect width="64" height="64" rx="16" fill="none"/>\n'
            f'  <rect x="2" y="2" width="60" height="60" rx="14" fill="none" stroke="{NAVY}" stroke-width="3"/>\n'
            f'  <polygon points="18,50 32,16 32,26 24.4,50" fill="{left}"/>\n'
            f'  <polygon points="32,16 46,50 39.6,50 32,26" fill="{right}"/>\n'
            f'  <rect x="23.5" y="34.5" width="17" height="4" rx="2" fill="{gold}"/>\n'
        )
    elif on == "mono-paper":
        bg, left, right, gold = "none", INK_PAPER, INK_PAPER, INK_PAPER
        return svg_doc(
            f'  <rect x="2" y="2" width="60" height="60" rx="14" fill="none" stroke="{INK_PAPER}" stroke-width="3"/>\n'
            f'  <polygon points="18,50 32,16 32,26 24.4,50" fill="{left}"/>\n'
            f'  <polygon points="32,16 46,50 39.6,50 32,26" fill="{right}"/>\n'
            f'  <rect x="23.5" y="34.5" width="17" height="4" rx="2" fill="{gold}"/>\n'
        )
    else:
        bg, left, right = NAVY, INK_PAPER, BLUE
    gold = GOLD
    return svg_doc(
        f'  <rect width="64" height="64" rx="16" fill="{bg}"/>\n'
        f'  <polygon points="18,50 32,16 32,26 24.4,50" fill="{left}"/>\n'
        f'  <polygon points="32,16 46,50 39.6,50 32,26" fill="{right}"/>\n'
        f'  <rect x="23.5" y="34.5" width="17" height="4" rx="2" fill="{gold}"/>\n'
    )


def option1_apex_square() -> str:
    """Full-bleed square for Apple touch icons (OS applies the mask)."""
    return svg_doc(
        f'  <rect width="64" height="64" fill="{NAVY}"/>\n'
        f'  <polygon points="18,50 32,16 32,26 24.4,50" fill="{INK_PAPER}"/>\n'
        f'  <polygon points="32,16 46,50 39.6,50 32,26" fill="{BLUE}"/>\n'
        f'  <rect x="23.5" y="34.5" width="17" height="4" rx="2" fill="{GOLD}"/>\n'
    )


def option2_orbit(on: str = "light") -> str:
    """Circular orbit mark. Void / electric blue / ice. No gold."""
    if on == "dark":
        bg, ring, tri, node = SURFACE, BLUE, INK_PAPER, BLUE
    elif on == "mono-ink":
        bg, ring, tri, node = "none", NAVY, NAVY, NAVY
        return svg_doc(
            f'  <circle cx="32" cy="32" r="29" fill="none" stroke="{ring}" stroke-width="3"/>\n'
            f'  <circle cx="32" cy="32" r="21" fill="none" stroke="{ring}" stroke-width="1.75" opacity="0.45"/>\n'
            f'  <path d="M32 13 L47.5 47.5 H16.5 Z" fill="none" stroke="{tri}" '
            f'stroke-width="3.2" stroke-linejoin="round"/>\n'
            f'  <circle cx="32" cy="13" r="3.6" fill="{node}"/>\n'
            f'  <circle cx="16.5" cy="47.5" r="2.6" fill="{node}"/>\n'
            f'  <circle cx="47.5" cy="47.5" r="2.6" fill="{node}"/>\n'
        )
    elif on == "mono-paper":
        bg, ring, tri, node = "none", INK_PAPER, INK_PAPER, INK_PAPER
        return svg_doc(
            f'  <circle cx="32" cy="32" r="29" fill="none" stroke="{ring}" stroke-width="3"/>\n'
            f'  <circle cx="32" cy="32" r="21" fill="none" stroke="{ring}" stroke-width="1.75" opacity="0.45"/>\n'
            f'  <path d="M32 13 L47.5 47.5 H16.5 Z" fill="none" stroke="{tri}" '
            f'stroke-width="3.2" stroke-linejoin="round"/>\n'
            f'  <circle cx="32" cy="13" r="3.6" fill="{node}"/>\n'
            f'  <circle cx="16.5" cy="47.5" r="2.6" fill="{node}"/>\n'
            f'  <circle cx="47.5" cy="47.5" r="2.6" fill="{node}"/>\n'
        )
    else:
        bg, ring, tri, node = VOID, BLUE, INK_PAPER, BLUE
    return svg_doc(
        f'  <circle cx="32" cy="32" r="30" fill="{bg}"/>\n'
        f'  <circle cx="32" cy="32" r="21.5" fill="none" stroke="{ring}" stroke-width="2.4"/>\n'
        f'  <path d="M32 14 L47 47 H17 Z" fill="none" stroke="{tri}" '
        f'stroke-width="3" stroke-linejoin="round"/>\n'
        f'  <circle cx="32" cy="14" r="3.8" fill="{node}"/>\n'
        f'  <circle cx="17" cy="47" r="2.7" fill="{INK_PAPER}"/>\n'
        f'  <circle cx="47" cy="47" r="2.7" fill="{INK_PAPER}"/>\n'
    )


def option2_orbit_square() -> str:
    """Full-bleed square for Apple touch icons (OS applies the mask)."""
    return svg_doc(
        f'  <rect width="64" height="64" fill="{VOID}"/>\n'
        f'  <circle cx="32" cy="32" r="21.5" fill="none" stroke="{BLUE}" stroke-width="2.4"/>\n'
        f'  <path d="M32 14 L47 47 H17 Z" fill="none" stroke="{INK_PAPER}" '
        f'stroke-width="3" stroke-linejoin="round"/>\n'
        f'  <circle cx="32" cy="14" r="3.8" fill="{BLUE}"/>\n'
        f'  <circle cx="17" cy="47" r="2.7" fill="{INK_PAPER}"/>\n'
        f'  <circle cx="47" cy="47" r="2.7" fill="{INK_PAPER}"/>\n'
    )


def option3_standard(on: str = "light") -> str:
    """Shield with split chevron and gold star. American-made palette."""
    star = star_points(32, 36.5, 6.2, 2.55)
    if on == "dark":
        shield, left, right = INK_PAPER, NAVY, SOFT_BLUE
        star_fill = GOLD
    elif on == "mono-ink":
        return svg_doc(
            f'  <path d="M32 4 L56 12 V30.5 C56 46 42.5 56.5 32 61 C21.5 56.5 8 46 8 30.5 V12 Z" '
            f'fill="none" stroke="{NAVY}" stroke-width="3" stroke-linejoin="round"/>\n'
            f'  <polygon points="20,50 32,16 32,26 24.8,50" fill="{NAVY}"/>\n'
            f'  <polygon points="32,16 44,50 39.2,50 32,26" fill="{NAVY}"/>\n'
            f'  <polygon points="{star_points(32, 36.5, 6.2, 2.55)}" fill="{NAVY}"/>\n'
        )
    elif on == "mono-paper":
        return svg_doc(
            f'  <path d="M32 4 L56 12 V30.5 C56 46 42.5 56.5 32 61 C21.5 56.5 8 46 8 30.5 V12 Z" '
            f'fill="none" stroke="{INK_PAPER}" stroke-width="3" stroke-linejoin="round"/>\n'
            f'  <polygon points="20,50 32,16 32,26 24.8,50" fill="{INK_PAPER}"/>\n'
            f'  <polygon points="32,16 44,50 39.2,50 32,26" fill="{INK_PAPER}"/>\n'
            f'  <polygon points="{star_points(32, 36.5, 6.2, 2.55)}" fill="{INK_PAPER}"/>\n'
        )
    else:
        shield, left, right = SURFACE, INK_PAPER, SOFT_BLUE
        star_fill = GOLD
    return svg_doc(
        f'  <path d="M32 4 L56 12 V30.5 C56 46 42.5 56.5 32 61 C21.5 56.5 8 46 8 30.5 V12 Z" fill="{shield}"/>\n'
        f'  <polygon points="20,50 32,16 32,26 24.8,50" fill="{left}"/>\n'
        f'  <polygon points="32,16 44,50 39.2,50 32,26" fill="{right}"/>\n'
        f'  <polygon points="{star}" fill="{star_fill}"/>\n'
    )


def option3_standard_square() -> str:
    """Full-bleed square for Apple touch icons (OS applies the mask)."""
    star = star_points(32, 36.5, 6.2, 2.55)
    return svg_doc(
        f'  <rect width="64" height="64" fill="{VOID}"/>\n'
        f'  <path d="M32 4 L56 12 V30.5 C56 46 42.5 56.5 32 61 C21.5 56.5 8 46 8 30.5 V12 Z" fill="{SURFACE}"/>\n'
        f'  <polygon points="20,50 32,16 32,26 24.8,50" fill="{INK_PAPER}"/>\n'
        f'  <polygon points="32,16 44,50 39.2,50 32,26" fill="{SOFT_BLUE}"/>\n'
        f'  <polygon points="{star}" fill="{GOLD}"/>\n'
    )


OPTIONS = {
    "apex": {
        "id": "1",
        "name": "Apex",
        "tag": "Software house",
        "scheme": "Navy / signal blue / gold",
        "blurb": "Rounded badge, split A, gold precision bar. Built from the site tokens.",
        "colors": [NAVY, BLUE, GOLD, PAPER],
        "fn": option1_apex,
        "live": False,
    },
    "orbit": {
        "id": "2",
        "name": "Orbit",
        "tag": "AI systems",
        "scheme": "Void / electric blue / ice",
        "blurb": "Circular orbit with a node triangle. Cooler, no gold, more AI than flag.",
        "colors": [VOID, BLUE, INK_PAPER, SURFACE],
        "fn": option2_orbit,
        "live": False,
    },
    "standard": {
        "id": "3",
        "name": "Standard",
        "tag": "American-made",
        "scheme": "Surface navy / soft blue / gold star",
        "blurb": "Shield mark with a gold star in the A. Reads U.S. based without a flag.",
        "colors": [SURFACE, SOFT_BLUE, GOLD, INK_PAPER],
        "fn": option3_standard,
        "live": True,
    },
}


def write(path: Path, text: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(text, encoding="utf-8")


def raster(svg_path: Path, png_path: Path, size: int) -> None:
    import subprocess

    png_path.parent.mkdir(parents=True, exist_ok=True)
    subprocess.run(
        [
            "magick",
            "-background",
            "none",
            "-density",
            "512",
            str(svg_path),
            "-resize",
            f"{size}x{size}",
            str(png_path),
        ],
        check=True,
    )


def font(name: str, size: int) -> ImageFont.FreeTypeFont:
    return ImageFont.truetype(str(FONTS / name), size)


def hex_to_rgb(h: str) -> tuple[int, int, int]:
    h = h.lstrip("#")
    return tuple(int(h[i : i + 2], 16) for i in (0, 2, 4))  # type: ignore[return-value]


def draw_tracked(
    draw: ImageDraw.ImageDraw,
    xy: tuple[float, float],
    text: str,
    fnt: ImageFont.FreeTypeFont,
    fill: str,
    tracking: float = 3,
) -> float:
    x, y = xy
    for ch in text:
        draw.text((x, y), ch, font=fnt, fill=fill)
        x += draw.textlength(ch, font=fnt) + tracking
    return x


def rounded_paste(base: Image.Image, overlay: Image.Image, xy: tuple[int, int], radius: int = 0) -> None:
    if radius:
        mask = Image.new("L", overlay.size, 0)
        ImageDraw.Draw(mask).rounded_rectangle((0, 0, overlay.size[0], overlay.size[1]), radius, fill=255)
        base.paste(overlay, xy, mask)
    else:
        base.paste(overlay, xy, overlay if overlay.mode == "RGBA" else None)


def make_lockup(mark: Image.Image, word: str, fg: str, bg: str | None, pad: int = 48) -> Image.Image:
    fnt = font("SpaceGrotesk-SemiBold.ttf", 92)
    tmp = Image.new("RGB", (8, 8))
    tw = ImageDraw.Draw(tmp).textlength(word, font=fnt)
    mark_s = 128
    w = pad * 2 + mark_s + 28 + int(tw) + 8
    h = pad * 2 + mark_s
    im = Image.new("RGBA", (w, h), (0, 0, 0, 0) if bg is None else hex_to_rgb(bg) + (255,))
    if bg:
        ImageDraw.Draw(im).rectangle((0, 0, w, h), fill=bg)
    m = mark.resize((mark_s, mark_s), Image.Resampling.LANCZOS)
    im.paste(m, (pad, pad), m)
    draw = ImageDraw.Draw(im)
    ty = pad + (mark_s - 92) / 2 - 6
    draw.text((pad + mark_s + 28, ty), word, font=fnt, fill=fg)
    return im


def make_board(opt: dict, mark_light: Image.Image, mark_dark: Image.Image) -> Image.Image:
    w, h = 1600, 900
    im = Image.new("RGB", (w, h), hex_to_rgb(PAPER))
    draw = ImageDraw.Draw(im)
    draw.rectangle((0, 0, 620, h), fill=VOID)
    # Lift the mark off the panel so navy badges still read.
    draw.rounded_rectangle((110, 148, 510, 548), 28, fill=SURFACE)
    big = mark_light.resize((320, 320), Image.Resampling.LANCZOS)
    im.paste(big, (150, 188), big)
    f_kicker = font("SpaceGrotesk-Medium.ttf", 20)
    f_title = font("SpaceGrotesk-Bold.ttf", 56)
    f_body = font("SpaceGrotesk-Regular.ttf", 22)
    f_small = font("SpaceGrotesk-Medium.ttf", 16)
    f_hex = font("SpaceGrotesk-Regular.ttf", 13)
    draw_tracked(draw, (72, 48), f"OPTION {opt['id']}  ·  {opt['tag'].upper()}", f_kicker, GOLD, 2.4)
    draw.text((72, 580), opt["name"], font=f_title, fill=INK_PAPER)
    draw.text((72, 650), opt["scheme"], font=f_body, fill="#9aa6b8")
    for i, c in enumerate(opt["colors"]):
        x = 72 + i * 88
        draw.rounded_rectangle((x, 708, x + 52, 760), 6, fill=c, outline=LINE_DARK, width=1)
        draw.text((x, 770), c, font=f_hex, fill="#9aa6b8")

    draw.text((700, 56), "Lockup", font=f_title, fill=NAVY)

    # wrap blurb
    blurb = opt["blurb"]
    words = blurb.split()
    lines: list[str] = []
    cur = ""
    for word in words:
        trial = (cur + " " + word).strip()
        if draw.textlength(trial, font=f_body) < 760:
            cur = trial
        else:
            lines.append(cur)
            cur = word
    if cur:
        lines.append(cur)
    draw.multiline_text((700, 128), "\n".join(lines), font=f_body, fill="#5b6575", spacing=6)

    light = make_lockup(mark_light, "ASAIS", NAVY, "#ffffff", pad=24)
    dark = make_lockup(mark_dark, "ASAIS", INK_PAPER, VOID, pad=24)

    def fit(img: Image.Image, max_w: int, max_h: int) -> Image.Image:
        r = min(max_w / img.width, max_h / img.height, 1.0)
        return img.resize((max(1, int(img.width * r)), max(1, int(img.height * r))), Image.Resampling.LANCZOS)

    light_s = fit(light, 700, 150)
    dark_s = fit(dark, 700, 150)
    draw.rounded_rectangle((690, 220, 1530, 410), 8, fill="#ffffff", outline=LINE)
    im.paste(light_s, (730, 220 + (190 - light_s.height) // 2), light_s)
    draw.rounded_rectangle((690, 430, 1530, 620), 8, fill=VOID)
    im.paste(dark_s, (730, 430 + (190 - dark_s.height) // 2), dark_s)

    draw.text((700, 650), "Favicon sizes", font=f_small, fill="#5b6575")
    x = 700
    for s, label in ((32, "32"), (64, "64"), (128, "128")):
        m = mark_light.resize((s, s), Image.Resampling.LANCZOS)
        im.paste(m, (x, 688), m)
        draw.text((x, 688 + s + 8), f"{label}px", font=f_hex, fill="#5b6575")
        x += s + 40
    return im


def make_x_ad(mark: Image.Image) -> Image.Image:
    w, h = 1600, 900
    im = Image.new("RGB", (w, h), hex_to_rgb(VOID))
    hero = Image.open(PUBLIC / "landing" / "hero.jpg").convert("RGB")
    # cover-crop hero into the right half
    target_w, target_h = 780, 900
    scale = max(target_w / hero.width, target_h / hero.height)
    hero = hero.resize((int(hero.width * scale), int(hero.height * scale)), Image.Resampling.LANCZOS)
    left = (hero.width - target_w) // 2
    top = (hero.height - target_h) // 2
    hero = hero.crop((left, top, left + target_w, top + target_h))
    im.paste(hero, (820, 0))
    # fade hero into void
    fade = Image.new("L", (780, 900), 0)
    fd = ImageDraw.Draw(fade)
    for x in range(220):
        fd.rectangle((x, 0, x, 900), fill=int(255 * (1 - x / 220)))
    veil = Image.new("RGB", (780, 900), hex_to_rgb(VOID))
    im.paste(veil, (820, 0), fade)
    # extra darken on photo
    dark = Image.new("RGB", (780, 900), hex_to_rgb(VOID))
    im.paste(dark, (820, 0), Image.new("L", (780, 900), 70))

    draw = ImageDraw.Draw(im)
    f_kicker = font("SpaceGrotesk-Medium.ttf", 22)
    f_h = font("SpaceGrotesk-Bold.ttf", 58)
    f_lead = font("SpaceGrotesk-Regular.ttf", 26)
    f_btn = font("SpaceGrotesk-SemiBold.ttf", 22)
    f_url = font("SpaceGrotesk-Medium.ttf", 18)
    f_word = font("SpaceGrotesk-SemiBold.ttf", 28)
    f_pill = font("SpaceGrotesk-Medium.ttf", 16)

    m = mark.resize((56, 56), Image.Resampling.LANCZOS)
    im.paste(m, (72, 56), m)
    draw.text((144, 66), "ASAIS", font=f_word, fill=INK_PAPER)

    draw_tracked(draw, (72, 160), "100% U.S. BASED TEAM", f_kicker, GOLD, 3.2)

    headline = "Custom software and AI\nfor small businesses."
    draw.multiline_text((72, 210), headline, font=f_h, fill=INK_PAPER, spacing=8)
    draw.text((72, 370), "We never offshore your work.", font=f_lead, fill="#9aa6b8")

    pills = ["Custom software", "AI implementation", "Workflows"]
    x = 72
    for p in pills:
        tw = draw.textlength(p, font=f_pill)
        draw.rounded_rectangle((x, 430, x + tw + 28, 468), 2, outline=LINE_DARK)
        draw.text((x + 14, 438), p, font=f_pill, fill=INK_PAPER)
        x += tw + 40

    # CTA
    draw.rounded_rectangle((72, 530, 318, 586), 2, fill=BLUE)
    draw.text((100, 544), "Start a project", font=f_btn, fill="#ffffff")
    draw.text((72, 612), "advancedsoftwareandaisolutions.com", font=f_url, fill="#6ba3ff")
    draw.text((72, 820), "Advanced Software and AI Solutions LLC", font=f_url, fill="#5b6575")
    return im


def make_og(mark: Image.Image, dark: bool = True) -> Image.Image:
    w, h = 1200, 630
    bg = VOID if dark else PAPER
    fg = INK_PAPER if dark else NAVY
    muted = "#9aa6b8" if dark else "#5b6575"
    im = Image.new("RGB", (w, h), hex_to_rgb(bg))
    draw = ImageDraw.Draw(im)
    m = mark.resize((96, 96), Image.Resampling.LANCZOS)
    im.paste(m, (72, 72), m)
    f_word = font("SpaceGrotesk-SemiBold.ttf", 36)
    f_h = font("SpaceGrotesk-Bold.ttf", 48)
    f_sub = font("SpaceGrotesk-Regular.ttf", 24)
    draw.text((188, 96), "ASAIS", font=f_word, fill=fg)
    draw_tracked(draw, (72, 220), "100% U.S. BASED TEAM", font("SpaceGrotesk-Medium.ttf", 20), GOLD, 2.8)
    draw.multiline_text(
        (72, 270),
        "Custom software and AI\nfor small businesses.",
        font=f_h,
        fill=fg,
        spacing=6,
    )
    draw.text((72, 420), "We never offshore your work.", font=f_sub, fill=muted)
    draw.text((72, 540), "advancedsoftwareandaisolutions.com", font=f_sub, fill=BLUE if not dark else "#6ba3ff")
    return im


def main() -> None:
    CONCEPTS.mkdir(parents=True, exist_ok=True)
    SESSION_IMAGES.mkdir(parents=True, exist_ok=True)

    # Preserve previous live mark once.
    legacy = BRAND / "mark-legacy.svg"
    if not legacy.exists() and (BRAND / "mark.svg").exists():
        shutil.copy2(BRAND / "mark.svg", legacy)
        shutil.copy2(BRAND / "mark-on-dark.svg", BRAND / "mark-on-dark-legacy.svg")

    rasters: dict[str, dict[str, Path]] = {}
    for key, opt in OPTIONS.items():
        fn = opt["fn"]
        files = {
            "light": CONCEPTS / f"{key}-mark.svg",
            "dark": CONCEPTS / f"{key}-mark-on-dark.svg",
            "mono-ink": CONCEPTS / f"{key}-mark-mono-ink.svg",
            "mono-paper": CONCEPTS / f"{key}-mark-mono-paper.svg",
        }
        write(files["light"], fn("light"))
        write(files["dark"], fn("dark"))
        write(files["mono-ink"], fn("mono-ink"))
        write(files["mono-paper"], fn("mono-paper"))
        pngs = {}
        for variant, svg in files.items():
            png = CONCEPTS / f"{key}-mark-{variant}-512.png"
            raster(svg, png, 512)
            pngs[variant] = png
        rasters[key] = pngs

        board = make_board(
            opt,
            Image.open(pngs["light"]).convert("RGBA"),
            Image.open(pngs["dark"]).convert("RGBA"),
        )
        board_path = CONCEPTS / f"option-{opt['id']}-{key}-board.png"
        board.save(board_path, "PNG", optimize=True)
        shutil.copy2(board_path, SESSION_IMAGES / f"logo-option-{opt['id']}.png")
        # also a clean icon preview
        icon_card = Image.new("RGB", (1024, 1024), hex_to_rgb(PAPER if key != "orbit" else VOID))
        mark = Image.open(pngs["light"]).convert("RGBA").resize((720, 720), Image.Resampling.LANCZOS)
        icon_card.paste(mark, (152, 152), mark)
        icon_path = CONCEPTS / f"option-{opt['id']}-{key}-icon.png"
        icon_card.save(icon_path, "PNG", optimize=True)
        shutil.copy2(icon_path, SESSION_IMAGES / f"logo-icon-{opt['id']}.png")

    # Live brand = Standard
    live = rasters["standard"]
    write(BRAND / "mark.svg", option3_standard("light"))
    write(BRAND / "mark-on-dark.svg", option3_standard("dark"))
    write(BRAND / "mark-mono-ink.svg", option3_standard("mono-ink"))
    write(BRAND / "mark-mono-paper.svg", option3_standard("mono-paper"))
    write(PUBLIC / "favicon.svg", option3_standard("light"))
    write(APP_ICON, option3_standard("light"))

    sizes = {
        BRAND / "mark-32.png": 32,
        BRAND / "mark-64.png": 64,
        BRAND / "mark-512.png": 512,
        BRAND / "mark-1024.png": 1024,
        BRAND / "mark-light-512.png": 512,
        PUBLIC / "favicon-32.png": 32,
    }
    for dest, size in sizes.items():
        raster(BRAND / "mark.svg", dest, size)
    write(CONCEPTS / "standard-apple-touch.svg", option3_standard_square())
    raster(CONCEPTS / "standard-apple-touch.svg", PUBLIC / "apple-touch-icon.png", 180)
    raster(BRAND / "mark-on-dark.svg", BRAND / "mark-dark-512.png", 512)
    raster(BRAND / "mark-mono-ink.svg", BRAND / "mark-mono-ink-512.png", 512)
    raster(BRAND / "mark-mono-paper.svg", BRAND / "mark-mono-paper-512.png", 512)

    for px in (32, 40, 48, 80, 96):
        raster(BRAND / "mark.svg", BRAND / f"nav-{px}-light.png", px)
        raster(BRAND / "mark-on-dark.svg", BRAND / f"nav-{px}-dark.png", px)

    mark_l = Image.open(live["light"]).convert("RGBA")
    mark_d = Image.open(live["dark"]).convert("RGBA")
    make_lockup(mark_l, "ASAIS", NAVY, PAPER).save(BRAND / "lockup-asais-light.png")
    make_lockup(mark_d, "ASAIS", INK_PAPER, VOID).save(BRAND / "lockup-asais-dark.png")
    make_lockup(mark_l, "Advanced Software and AI Solutions", NAVY, PAPER, pad=36).save(
        BRAND / "lockup-horizontal-light.png"
    )
    make_lockup(mark_d, "Advanced Software and AI Solutions", INK_PAPER, VOID, pad=36).save(
        BRAND / "lockup-horizontal-dark.png"
    )

    # stacked lockup
    def stacked(mark: Image.Image, fg: str, bg: str) -> Image.Image:
        fnt = font("SpaceGrotesk-SemiBold.ttf", 56)
        fsub = font("SpaceGrotesk-Regular.ttf", 22)
        line1, line2 = "Advanced Software", "and AI Solutions"
        tmp = ImageDraw.Draw(Image.new("RGB", (8, 8)))
        tw = max(tmp.textlength(line1, font=fnt), tmp.textlength(line2, font=fnt))
        ms = 160
        w = 80 + max(ms, int(tw)) + 80
        h = 80 + ms + 28 + 56 + 8 + 56 + 40
        im = Image.new("RGB", (w, h), hex_to_rgb(bg))
        m = mark.resize((ms, ms), Image.Resampling.LANCZOS)
        im.paste(m, ((w - ms) // 2, 64), m)
        d = ImageDraw.Draw(im)
        y = 64 + ms + 24
        d.text(((w - tmp.textlength(line1, font=fnt)) / 2, y), line1, font=fnt, fill=fg)
        d.text(((w - tmp.textlength(line2, font=fnt)) / 2, y + 60), line2, font=fnt, fill=fg)
        return im

    stacked(mark_l, NAVY, PAPER).save(BRAND / "lockup-stacked-light.png")
    stacked(mark_d, INK_PAPER, VOID).save(BRAND / "lockup-stacked-dark.png")

    ad = make_x_ad(mark_d)
    ad_path = CONCEPTS / "x-ad-us-based.png"
    ad.save(ad_path, "PNG", optimize=True)
    shutil.copy2(ad_path, SESSION_IMAGES / "x-ad.png")
    # X also likes jpg
    ad.convert("RGB").save(CONCEPTS / "x-ad-us-based.jpg", "JPEG", quality=92)

    make_og(mark_d, dark=True).save(PUBLIC / "og.png")
    make_og(mark_l, dark=False).save(PUBLIC / "og-light.png")

    print("Wrote concepts to", CONCEPTS)
    print("Installed Standard as live brand")
    print("X ad:", ad_path)


if __name__ == "__main__":
    main()
