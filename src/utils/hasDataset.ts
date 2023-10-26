type EventTargetWithDataset = object & { dataset: Record<string, string> }

const hasDataset = (potentialEventTarget: object): potentialEventTarget is EventTargetWithDataset =>
  'dataset' in potentialEventTarget &&
  typeof potentialEventTarget.dataset === 'object' &&
  Object.values(potentialEventTarget.dataset as { [s: string]: unknown }).length > 0

export default hasDataset
