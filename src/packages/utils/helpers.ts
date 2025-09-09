export const thousandsToKFormat = (value: number, register='K'): string => {
    if (!Number.isFinite(value)) return String(value);
    if (Math.abs(value) < 1000) return String(value);

    const rounded = +(value / 1000).toFixed(1);
    return `${ rounded % 1 === 0 ? rounded.toFixed(0) : rounded }${register}`;
}
