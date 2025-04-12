export default function renderStars(count: number): string {
    return "★".repeat(count) + "☆".repeat(5 - count);
}