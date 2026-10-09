# Evidence / Evidencia

## English

This page summarizes dated project records: the suite captured 2026-10-09 and published here as docs/suite-2026-10-09.txt, which includes a local walkthrough using synthetic data and no network, and a separate PERMA issuance on Stellar testnet. The public repository does not contain the source code, test files, or verifier code. Read the local results as the project’s captured report, not as a test run a reader can reproduce from this repository; the testnet hashes can be checked individually through Horizon as described below.

### What was recorded

| Record | What it covers | Reported result |
| --- | --- | --- |
| Suite (2026-10-09 capture) | Named behavior checks, controls, receipt validation, kernel provenance of the vendored copy, local path handling, terminal output, token plan, and Horizon utilities. | 52 tests, 52 passing, 0 skipped. |
| Adversarial RED phase | 25 cases written before implementation, with three valid controls. | All 25 adversarial cases came back RED for their expected reasons; the three controls passed. |
| Local walkthrough | Synthetic principal, work, custody declaration, references, review, permission, publication decision, and empty-evidence rejection. | Seven accepted operations and one rejection for `evidencia-vacia`. |
| Mutation sweep | Six isolated changes to rules with focused checks. | All six changes were detected; the original source was restored. |
| Local security review | Output path containment, evidence-backed verification, terminal control characters, and stated limitations. | Four security checks reported passing after fixes. The review was local, not independent. |

The GREEN suite contains the five kernel and walkthrough checks below, 25 adversarial rule checks, three valid controls, two further verification checks, two security checks, and fifteen further checks covering the fixed-supply token configuration, the allocation plan and its vesting demo, Horizon utilities and pagination, local key storage, and configuration handling. Its named cases include unverified publication, claimant and reviewer separation, empty and repeated evidence, conflicting custody claims, royalty ceilings, expiry and revocation, stale evidence, token permission boundaries, missing custody actors, reviewer conflicts, and actionable rejection output. The names and exact recorded totals are in the captured suite summary published here as docs/suite-2026-10-09.txt.

### What the adversarial phase found

The RED run asked whether the planned rules could reject specific bad states before they were implemented. Its cases cover a museum publishing without review, one party declaring and reviewing the same claim, empty or duplicated references, incompatible provenance claims, a royalty over its stated ceiling, expired or revoked permissions, stale receipts, duplicated payee identity, documented looting indicators, free text or a single administrator asserting “verified,” contradictions in evidence, authority expiry, writing into another institution’s space, permissions without an identified work, use beyond the grant, token ownership being treated as a permission, incomplete custody, evidence changing after review, an executor reviewing their own effect, and a rejection with no path to resolve it. Each case came back RED for its expected reason before implementation. This is evidence that the tests expressed those expectations of rejection, not that such rejections were observed at real institutions.

The later mutation sweep changed six rules one at a time: claimant and reviewer independence, the royalty ceiling, expiration, revocation, permission scope, and the actor/evidence required for a custody event. Each focused test detected its change. That provides a small check that those tests react to changes in the corresponding rules; it is not a complete measure of test quality.

### Kernel identity and the digest check

The project pins the consumed Vespi kernel to **0.1.5** (commit `ed559e83c976dd6e6a379a5510db776206f670b4`), copied into the private project as `vendor/vespi-kernel`, and the suite verifies that copy against its SOURCE.md, module by module and commit by commit. The earlier capture on 2026-10-03 was red because the project was pinned to an older kernel cut (0.1.3); that pin is now complete. The suite reports four kernel-provenance checks:

- the vendored kit declares every module in its SOURCE.md;
- the consumed kernel matches the kit's digest table;
- the vendored copy has no undeclared modules and no gaps;
- installed modules declare the same commit.

A digest is a technical fingerprint of the specific files compared. Matching it helps answer, “Which kernel copy did this run consume?” It does not answer, “Is the cultural claim true?” It cannot authenticate a person, a document, a mandate, a work, ownership, or legal authority. The local walkthrough used real kernel receipts and reports that their integrity checks passed, without modifying the vendored kernel copy. The published capture does not provide the code or the digest values, so this repository cannot independently repeat that comparison.

### What can and cannot be checked here

The reported run states that it had no network, did not turn on a blockchain, and did not simulate an external anchor. No Stellar operation, testnet transaction, or internet publication is recorded. The evidence summary does not establish museum participation, real-world provenance, object authenticity, legal title, permission authority, complete custody, cultural value, legal compliance, permanent preservation, or production readiness.

The four local security checks address a bounded set of code paths. They report that paths outside the repository and symbolic-link paths were rejected, that a text or boolean verification and an unreceipted opinion were insufficient, and that terminal control characters were escaped. The review also names unresolved limits: input size is not bounded, all input fields do not have an exhaustive schema, and concurrent hostile filesystem changes are outside its protection. It did not review a network service, marketplace, wallet, or token integration. The report expressly says it is not an independent security audit.

Because this public repository contains documentation only, running a test command here cannot reproduce the captured suite. When source code is opened for review, the suite must report 52 tests with 52 passing and 0 skipped on Node v24.15.0 against the vendored kernel 0.1.5; docs/suite-2026-10-09.txt is the reference capture for command, Node version, totals, and individual test names. The project's publication terms are in [Code not included](../CODE_NOT_INCLUDED.md) and [LICENSE](../LICENSE).

### PERMA testnet transaction evidence

The separate PERMA testnet record reports an independent, read-only comparison against Horizon. The manifest contains 63 transaction hashes: nine preliminary testnet account-funding entries, 53 ledgered transactions, and one early-claim attempt recorded as unsuccessful. The entries are grouped below by their documented role. The manifest does not label the operation type for each hash, so inspect the Horizon transaction details before attributing a specific operation to an individual hash. A testnet reset may make these links unavailable.

#### Preliminary account funding

The project record identifies nine Friendbot funding transactions. These manifest entries have no ledger number recorded:

- [8fa9bcbb78245faea3bcb02fa1ad80369e3850a402bf2c6f1d139a5a93da42fe](https://horizon-testnet.stellar.org/transactions/8fa9bcbb78245faea3bcb02fa1ad80369e3850a402bf2c6f1d139a5a93da42fe)
- [7d2d2422578fbbb1a63bf89ab55514b520a08a178bb7ef65624952128cef77b8](https://horizon-testnet.stellar.org/transactions/7d2d2422578fbbb1a63bf89ab55514b520a08a178bb7ef65624952128cef77b8)
- [778f3ba6932e7ce3475ea6d2137ed2f9b0b8bc5cf4e2e79166a8f39225e72854](https://horizon-testnet.stellar.org/transactions/778f3ba6932e7ce3475ea6d2137ed2f9b0b8bc5cf4e2e79166a8f39225e72854)
- [a98418c1600293ace432a0b79df01ee8b89858eb1c4805007ebe6b8fcf496371](https://horizon-testnet.stellar.org/transactions/a98418c1600293ace432a0b79df01ee8b89858eb1c4805007ebe6b8fcf496371)
- [9dc0cccc4d1d9dd76e63b00196654d6d1ad5607d65d72eda33bc66a20a1439ab](https://horizon-testnet.stellar.org/transactions/9dc0cccc4d1d9dd76e63b00196654d6d1ad5607d65d72eda33bc66a20a1439ab)
- [745656a90e69324901b2a0801ecf97e304936b3dcb4cf54c0170d6fc9486a990](https://horizon-testnet.stellar.org/transactions/745656a90e69324901b2a0801ecf97e304936b3dcb4cf54c0170d6fc9486a990)
- [6f42f1d224c09c9e9099325f19a202997bb2947a2a8f22e7f581df623622a707](https://horizon-testnet.stellar.org/transactions/6f42f1d224c09c9e9099325f19a202997bb2947a2a8f22e7f581df623622a707)
- [dd119e3396e3759f0655985a0e6f96b3d6868137a24a1461c51a0493260da1da](https://horizon-testnet.stellar.org/transactions/dd119e3396e3759f0655985a0e6f96b3d6868137a24a1461c51a0493260da1da)
- [f877dbf45c4617b93b924b6df6d822a53db6d029998c84f25264af0be6960d6f](https://horizon-testnet.stellar.org/transactions/f877dbf45c4617b93b924b6df6d822a53db6d029998c84f25264af0be6960d6f)

#### Ledgered PERMA operation sequence

These 53 successful transactions are recorded across ledgers 5010900 to 5010953. The independent verification report uses the sequence and Horizon state to check the fixed supply, issuer lock and flags, bucket balances, and 36 vesting claimable balances. Individual operation types are not mapped to hashes in the manifest:

- [d77ef091fe839d60ace129f432d2782e0d888b9f3b49a365454c144c896abfad](https://horizon-testnet.stellar.org/transactions/d77ef091fe839d60ace129f432d2782e0d888b9f3b49a365454c144c896abfad) (ledger 5010900)
- [063bd74798e51868b2af400207f7651c46ba87c218df92a612b6681fc67a6760](https://horizon-testnet.stellar.org/transactions/063bd74798e51868b2af400207f7651c46ba87c218df92a612b6681fc67a6760) (ledger 5010901)
- [2f095252ef5db6614148cf65bdc9a9359b51cccdbb8d63e4f49453215de6a006](https://horizon-testnet.stellar.org/transactions/2f095252ef5db6614148cf65bdc9a9359b51cccdbb8d63e4f49453215de6a006) (ledger 5010902)
- [a5fe6d7253e632be37511369bd505dacf4807b3dae8d6a37ec2842d57915444f](https://horizon-testnet.stellar.org/transactions/a5fe6d7253e632be37511369bd505dacf4807b3dae8d6a37ec2842d57915444f) (ledger 5010903)
- [9d2be96274ccc97aa46f0457f298c6ff47e9e180bacd63e7e425c4bb652eca0f](https://horizon-testnet.stellar.org/transactions/9d2be96274ccc97aa46f0457f298c6ff47e9e180bacd63e7e425c4bb652eca0f) (ledger 5010904)
- [cac8f38c5b0e2eb30fdfeeaf1ca4a8f71c3a82610d3317194d03210e68d7db08](https://horizon-testnet.stellar.org/transactions/cac8f38c5b0e2eb30fdfeeaf1ca4a8f71c3a82610d3317194d03210e68d7db08) (ledger 5010905)
- [7a17852beac1291abd9daf8b6e8a0638cefbc8bbdd7155f244e5edfc198ab7bb](https://horizon-testnet.stellar.org/transactions/7a17852beac1291abd9daf8b6e8a0638cefbc8bbdd7155f244e5edfc198ab7bb) (ledger 5010906)
- [2d6f9e76386ec6e12eb576c77543750fc319d77866b55656dc9e73a6835927f8](https://horizon-testnet.stellar.org/transactions/2d6f9e76386ec6e12eb576c77543750fc319d77866b55656dc9e73a6835927f8) (ledger 5010907)
- [67376dfb6eb091621eb153995b6c7807afbefdc162c4323588d1b68523ee15c6](https://horizon-testnet.stellar.org/transactions/67376dfb6eb091621eb153995b6c7807afbefdc162c4323588d1b68523ee15c6) (ledger 5010908)
- [dfed371f8d4fbb7b9199e9a4a412b57ecb402ebfe82fec8c78a45bcd7d3b94b2](https://horizon-testnet.stellar.org/transactions/dfed371f8d4fbb7b9199e9a4a412b57ecb402ebfe82fec8c78a45bcd7d3b94b2) (ledger 5010909)
- [a16f1b34b6ecf9e5423af17c34b4e0393666c409c7a288df7d43fa4f44fadc44](https://horizon-testnet.stellar.org/transactions/a16f1b34b6ecf9e5423af17c34b4e0393666c409c7a288df7d43fa4f44fadc44) (ledger 5010910)
- [44093fa2aa7e71a86a5fcc3b35982ab9e7c876bdace7618b512eee1e9006cef1](https://horizon-testnet.stellar.org/transactions/44093fa2aa7e71a86a5fcc3b35982ab9e7c876bdace7618b512eee1e9006cef1) (ledger 5010911)
- [24a13e6ed688cc1f7f2063e336ed5fd229591a78ea685ef90bcce01102971c4a](https://horizon-testnet.stellar.org/transactions/24a13e6ed688cc1f7f2063e336ed5fd229591a78ea685ef90bcce01102971c4a) (ledger 5010912)
- [530554c14dc3d5eab608ab109aade6183666f201d5cc185e1df79904ca32f801](https://horizon-testnet.stellar.org/transactions/530554c14dc3d5eab608ab109aade6183666f201d5cc185e1df79904ca32f801) (ledger 5010913)
- [6aaa442c01d156794406752102d56bd05f1740a3c7632fd98f42eede8f5e4c4c](https://horizon-testnet.stellar.org/transactions/6aaa442c01d156794406752102d56bd05f1740a3c7632fd98f42eede8f5e4c4c) (ledger 5010914)
- [e82b06d6a16191f5ef4cf00e079192339776bd04cabdf0149aafa58d2d7087eb](https://horizon-testnet.stellar.org/transactions/e82b06d6a16191f5ef4cf00e079192339776bd04cabdf0149aafa58d2d7087eb) (ledger 5010915)
- [2671a6fe9db37646078fadbe99c78653c64ff4da9b0c5a0532be262759281815](https://horizon-testnet.stellar.org/transactions/2671a6fe9db37646078fadbe99c78653c64ff4da9b0c5a0532be262759281815) (ledger 5010917)
- [d9ecc9a22b4f079ecefbe1c32104ef0ec0a7da1b2011f5a7ef4dca0e8921914e](https://horizon-testnet.stellar.org/transactions/d9ecc9a22b4f079ecefbe1c32104ef0ec0a7da1b2011f5a7ef4dca0e8921914e) (ledger 5010918)
- [e32f07371d37ce05d4c16463cc438b9bf036d93f8348634584d481fae5971109](https://horizon-testnet.stellar.org/transactions/e32f07371d37ce05d4c16463cc438b9bf036d93f8348634584d481fae5971109) (ledger 5010919)
- [6462ae68e768f1773a09c56076be68444e2763cf2e714d1addfdcd3eaab035d2](https://horizon-testnet.stellar.org/transactions/6462ae68e768f1773a09c56076be68444e2763cf2e714d1addfdcd3eaab035d2) (ledger 5010920)
- [8c5d08d1b1f4bb9700705821e7345e754920a2bf58ebae302b62d7cf664527ae](https://horizon-testnet.stellar.org/transactions/8c5d08d1b1f4bb9700705821e7345e754920a2bf58ebae302b62d7cf664527ae) (ledger 5010921)
- [1439fa1436d875bb87407d7f22c47d8ea5ae66ed4a06cac72d084f841e906256](https://horizon-testnet.stellar.org/transactions/1439fa1436d875bb87407d7f22c47d8ea5ae66ed4a06cac72d084f841e906256) (ledger 5010922)
- [6a27f5ea6fffaabc6c4be70bf97be1f11292d38e802e72f0d7fa56395c9c3277](https://horizon-testnet.stellar.org/transactions/6a27f5ea6fffaabc6c4be70bf97be1f11292d38e802e72f0d7fa56395c9c3277) (ledger 5010923)
- [61985c0f902c1d05b091f51a89c09d19ce9bd357a147d0ee1950fbe46cdfa118](https://horizon-testnet.stellar.org/transactions/61985c0f902c1d05b091f51a89c09d19ce9bd357a147d0ee1950fbe46cdfa118) (ledger 5010924)
- [4945caae03616b7798af7817853d6652bd57e9f6fecfa47fa8d40c3e7dced4a0](https://horizon-testnet.stellar.org/transactions/4945caae03616b7798af7817853d6652bd57e9f6fecfa47fa8d40c3e7dced4a0) (ledger 5010925)
- [d1ee16eecc052fa26c068f91dbd81e26058ed833031b3d0aa1393659e56390e8](https://horizon-testnet.stellar.org/transactions/d1ee16eecc052fa26c068f91dbd81e26058ed833031b3d0aa1393659e56390e8) (ledger 5010926)
- [d43a2767d72cc16f228361a777e4427f706a7941280b68459b70c27ba5d19ef2](https://horizon-testnet.stellar.org/transactions/d43a2767d72cc16f228361a777e4427f706a7941280b68459b70c27ba5d19ef2) (ledger 5010927)
- [88357f1075c448782479c4478f8f384ffff5512e13f40988ebfbf334e364fc1d](https://horizon-testnet.stellar.org/transactions/88357f1075c448782479c4478f8f384ffff5512e13f40988ebfbf334e364fc1d) (ledger 5010928)
- [3bf7a9ec98703e9817e5802a4270542a969ad209873ea8878f57aa2ed724003a](https://horizon-testnet.stellar.org/transactions/3bf7a9ec98703e9817e5802a4270542a969ad209873ea8878f57aa2ed724003a) (ledger 5010929)
- [b50d503634f2fcb67a3d979243b09973fae55f6dd598a1e3d2fb3330d032a1f2](https://horizon-testnet.stellar.org/transactions/b50d503634f2fcb67a3d979243b09973fae55f6dd598a1e3d2fb3330d032a1f2) (ledger 5010930)
- [3e74cc62590b808339a7e4364818082258a21fb0064d91f66f0bde58afaa1c68](https://horizon-testnet.stellar.org/transactions/3e74cc62590b808339a7e4364818082258a21fb0064d91f66f0bde58afaa1c68) (ledger 5010931)
- [50e3c16d50bc573affe54a44e8d74bba9886d29008fec149a2e7f389041f7a76](https://horizon-testnet.stellar.org/transactions/50e3c16d50bc573affe54a44e8d74bba9886d29008fec149a2e7f389041f7a76) (ledger 5010932)
- [f10f1252e04cc7fc7cb4af82cd135b67088f12f89913444e109ff8b8244be191](https://horizon-testnet.stellar.org/transactions/f10f1252e04cc7fc7cb4af82cd135b67088f12f89913444e109ff8b8244be191) (ledger 5010933)
- [2de71c1b076fe1c6abb9bb7926c69e94a270e65c05cd2dfd0e82d36e51c862eb](https://horizon-testnet.stellar.org/transactions/2de71c1b076fe1c6abb9bb7926c69e94a270e65c05cd2dfd0e82d36e51c862eb) (ledger 5010934)
- [bc9fdbb749ad7f32e198318628f02c571b832a18eec87710d3790aa98ea5a975](https://horizon-testnet.stellar.org/transactions/bc9fdbb749ad7f32e198318628f02c571b832a18eec87710d3790aa98ea5a975) (ledger 5010935)
- [8ecf9bab12b2d3d3e21c7dafde3d983b8fb4d5d8948639fac63cece4a8e265f7](https://horizon-testnet.stellar.org/transactions/8ecf9bab12b2d3d3e21c7dafde3d983b8fb4d5d8948639fac63cece4a8e265f7) (ledger 5010936)
- [8d188608ffb3bdd3a414d93ff10f8710d95440385def23115ce99abd47148ef0](https://horizon-testnet.stellar.org/transactions/8d188608ffb3bdd3a414d93ff10f8710d95440385def23115ce99abd47148ef0) (ledger 5010937)
- [58493c1957bebe52212e2abe826744c5865182d3abc011752ede2fffa6855022](https://horizon-testnet.stellar.org/transactions/58493c1957bebe52212e2abe826744c5865182d3abc011752ede2fffa6855022) (ledger 5010938)
- [0fe009e7a2b1003c619848623dae919722a786b9f7a9ff5ba87a4c7558263a5f](https://horizon-testnet.stellar.org/transactions/0fe009e7a2b1003c619848623dae919722a786b9f7a9ff5ba87a4c7558263a5f) (ledger 5010939)
- [5a87249695a27558ffdc01b6eeadcd35c04ac01288f4039ccf0dc2f1b18e423f](https://horizon-testnet.stellar.org/transactions/5a87249695a27558ffdc01b6eeadcd35c04ac01288f4039ccf0dc2f1b18e423f) (ledger 5010940)
- [e3cad75ee3998ade9e55977cb810f599df366ae4f83269eb8d6429b9b1e57293](https://horizon-testnet.stellar.org/transactions/e3cad75ee3998ade9e55977cb810f599df366ae4f83269eb8d6429b9b1e57293) (ledger 5010941)
- [4e3c04e5be4182053399d234f0984cede8d247025a09370fdbcdfca58cfd3345](https://horizon-testnet.stellar.org/transactions/4e3c04e5be4182053399d234f0984cede8d247025a09370fdbcdfca58cfd3345) (ledger 5010942)
- [4cc10d85875373c6577ca395d2bc6229c7d8f2f6cd6bc2d647c8a4c70c8031ce](https://horizon-testnet.stellar.org/transactions/4cc10d85875373c6577ca395d2bc6229c7d8f2f6cd6bc2d647c8a4c70c8031ce) (ledger 5010943)
- [aeb42c6f5472d3f46dfc4861a6a24159744018c41d00d23fefc586f0bb1ba90b](https://horizon-testnet.stellar.org/transactions/aeb42c6f5472d3f46dfc4861a6a24159744018c41d00d23fefc586f0bb1ba90b) (ledger 5010944)
- [f3ce724cbf870a391aff7bd734454fa03b4945a9c5db5649b3189c6f1085fe14](https://horizon-testnet.stellar.org/transactions/f3ce724cbf870a391aff7bd734454fa03b4945a9c5db5649b3189c6f1085fe14) (ledger 5010945)
- [9734580994c6206b6c3876a4a7f90bb317997a9ea73c18841de3a99e63d87930](https://horizon-testnet.stellar.org/transactions/9734580994c6206b6c3876a4a7f90bb317997a9ea73c18841de3a99e63d87930) (ledger 5010946)
- [9dfc662560b010daef43d5784a6276d9a661370566c849968a51a7a499986147](https://horizon-testnet.stellar.org/transactions/9dfc662560b010daef43d5784a6276d9a661370566c849968a51a7a499986147) (ledger 5010947)
- [b0c2d50f064ab264e94a5a4e12756bfdffde78fbbde2d1431e9a0554bafacd4a](https://horizon-testnet.stellar.org/transactions/b0c2d50f064ab264e94a5a4e12756bfdffde78fbbde2d1431e9a0554bafacd4a) (ledger 5010948)
- [275d87cd387f76cc689f1df4f35341b1baeb3f755c212533cb99bdb9aae991e7](https://horizon-testnet.stellar.org/transactions/275d87cd387f76cc689f1df4f35341b1baeb3f755c212533cb99bdb9aae991e7) (ledger 5010949)
- [22f258a037b2fe610f5e840603c92861d2666a23b11531e12bd129561046e31e](https://horizon-testnet.stellar.org/transactions/22f258a037b2fe610f5e840603c92861d2666a23b11531e12bd129561046e31e) (ledger 5010950)
- [fb2425b9ea5e5a0b2bc5ec3ca58148cf0f0cdd01e412d300eab1665207488317](https://horizon-testnet.stellar.org/transactions/fb2425b9ea5e5a0b2bc5ec3ca58148cf0f0cdd01e412d300eab1665207488317) (ledger 5010951)
- [5fafc09cfc954bfc0b877c11530edaf8528e4e2484e413a9be24c455fd9fb59c](https://horizon-testnet.stellar.org/transactions/5fafc09cfc954bfc0b877c11530edaf8528e4e2484e413a9be24c455fd9fb59c) (ledger 5010952)
- [c86d006922088aa1a791dfde81b3e19edfa5ace3234d89f76885553ee28c9325](https://horizon-testnet.stellar.org/transactions/c86d006922088aa1a791dfde81b3e19edfa5ace3234d89f76885553ee28c9325) (ledger 5010953)

#### Unsuccessful early-claim test

The manifest records this attempted claim as unsuccessful, consistent with the reported `too_early` result. It does not represent a successful payment:

- [8ec2975f3a774002202ace8df950b96f3f827b4be4142a6a5568ad7b6bae27fd](https://horizon-testnet.stellar.org/transactions/8ec2975f3a774002202ace8df950b96f3f827b4be4142a6a5568ad7b6bae27fd)

#### How to recheck

Open each Horizon link to inspect its transaction result, operations, ledger, and time. Compare the ledgered transaction hashes and the resulting asset/account state with the testnet record. Horizon confirms testnet records, not cultural rights, legal authority, marketplace activity, payment for an artwork, royalty entitlement, demand, or value. The public repository does not include the read-only verifier code or secret keys, and no independent network check was performed while preparing this page.

## Español

Esta página resume registros fechados del proyecto: la suite capturada el 2026-10-09 y publicada aquí como docs/suite-2026-10-09.txt, que incluye un recorrido local con datos sintéticos y sin red, y una emisión separada de PERMA en Stellar testnet. El repositorio público no contiene código fuente, archivos de pruebas ni el código del verificador. Lee los resultados locales como un informe capturado por el proyecto, no como una corrida que se pueda reproducir desde este repositorio; puedes comprobar cada hash de testnet mediante Horizon, como se indica abajo.

### Qué se registró

| Registro | Qué cubre | Resultado informado |
| --- | --- | --- |
| Suite (captura 2026-10-09) | Comprobaciones nombradas de comportamiento, controles, validación de recibos, procedencia de la copia vendorizada, rutas locales, salida de terminal, plan del token y utilidades de Horizon. | 52 pruebas, 52 aprobadas, 0 omitidas. |
| Fase adversarial RED | 25 casos escritos antes de implementar, con tres controles válidos. | Los 25 casos adversariales quedaron en rojo por los motivos previstos; los tres controles se aprobaron. |
| Recorrido local | Principal, obra, declaración de custodia, referencias, dictamen, permiso, decisión de publicación y rechazo por evidencia vacía, todo sintético. | Siete operaciones aceptadas y un rechazo por `evidencia-vacia`. |
| Barrido de mutaciones | Seis cambios aislados de reglas con comprobaciones focalizadas. | Se detectaron los seis cambios; se restauró el código original. |
| Revisión local de seguridad | Contención de rutas, verificación respaldada por evidencia, controles de terminal y límites declarados. | Se informan cuatro comprobaciones de seguridad aprobadas tras las correcciones. La revisión fue local, no independiente. |

La suite GREEN contiene las cinco comprobaciones del kernel y del recorrido que se describen abajo, 25 comprobaciones de reglas adversariales, tres controles válidos, dos comprobaciones adicionales de verificación, dos comprobaciones de seguridad y quince comprobaciones adicionales sobre la configuración del token de oferta fija, el plan de asignación y su demo de vesting, las utilidades de Horizon y la paginación, el almacenamiento local de llaves y el manejo de configuración. Entre los casos nombrados están publicación institucional sin revisión, separación entre declarante y persona revisora, evidencia vacía o repetida, procedencias incompatibles, topes de regalía, vencimiento y revocación, evidencia antigua, límites de permisos y tokens, actores faltantes en custodia, conflictos de revisión y rechazos sin salida accionable. Los nombres y totales exactos están en el resumen de suite capturado, publicado aquí como docs/suite-2026-10-09.txt.

### Qué encontró la fase adversarial

La corrida RED preguntó si las reglas planificadas podían rechazar estados indebidos antes de implementarse. Sus casos cubren una publicación sin revisión, una misma parte que declara y revisa, referencias vacías o duplicadas, afirmaciones de procedencia incompatibles, una regalía por sobre su techo, permisos vencidos o revocados, recibos antiguos, identidad de cobro duplicada, indicios documentados de saqueo, texto libre o una persona administradora afirmando «verificado», contradicciones en la evidencia, vencimiento de autoridad, escritura en el espacio de otra institución, permisos sin obra identificada, usos que exceden la concesión, tokens tratados como permisos, custodia incompleta, evidencia cambiada tras la revisión, una persona ejecutora revisando su propio efecto y un rechazo sin vía de resolución. Cada caso quedó en rojo por el motivo previsto antes de implementar. Esto demuestra que las pruebas expresaban esas expectativas de rechazo, no que tales rechazos se observaran en instituciones reales.

El barrido posterior cambió seis reglas de una en una: independencia entre declarante y persona revisora, techo de regalía, vencimiento, revocación, alcance del permiso y actor/evidencia exigidos para un evento de custodia. Cada prueba focalizada detectó el cambio. Es una comprobación acotada de que esas pruebas reaccionan a cambios en las reglas correspondientes; no mide por completo la calidad de la suite.

### Identidad del kernel y comprobación por digest

El proyecto fija el kernel de Vespi consumido a **0.1.5** (commit `ed559e83c976dd6e6a379a5510db776206f670b4`), copiado dentro del proyecto privado como `vendor/vespi-kernel`, y la suite verifica esa copia contra su SOURCE.md, módulo por módulo y commit por commit. La captura del 2026-10-03 estuvo en rojo porque el proyecto estaba fijado a un corte viejo del kernel (0.1.3); esa fijación ya está completa. La suite informa cuatro comprobaciones de procedencia del kernel:

- el kit vendorizado declara todos los módulos de su SOURCE.md;
- el kernel consumido coincide con la tabla de digest del kit;
- la copia vendorizada no tiene módulos sin declarar ni huecos;
- los módulos vendorizados declaran el mismo commit.

Un digest es una huella técnica de los archivos comparados. Al coincidir, ayuda a responder: «¿Qué copia del kernel consumió esta corrida?». No responde: «¿Es verdadera la afirmación cultural?». No autentica a una persona, un documento, un mandato, una obra, la propiedad ni la autoridad jurídica. El recorrido local usó recibos reales del kernel y el informe dice que pasaron las comprobaciones de integridad, sin modificar la copia vendorizada. La captura publicada no incluye código ni valores de digest, por lo que este repositorio no permite repetir la comparación de forma independiente.

### Qué se puede comprobar aquí y qué no

El informe de la corrida dice que no hubo red, blockchain activa ni anclaje externo simulado. No registra operaciones en Stellar, transacciones de testnet ni publicación en internet. El resumen de evidencia no establece participación de un museo, procedencia real, autenticidad de una obra, titularidad jurídica, autoridad del permiso, custodia completa, valor cultural, cumplimiento legal, preservación permanente ni preparación para producción.

Las cuatro comprobaciones locales de seguridad cubren un conjunto acotado de rutas de código. Informan que se rechazaron rutas fuera del repositorio y rutas con enlaces simbólicos, que no bastó una verificación textual o booleana ni un dictamen sin recibo, y que se escaparon caracteres de control en la terminal. La revisión también nombra límites sin resolver: no se fija un tamaño máximo para la entrada, no hay un esquema exhaustivo de todos sus campos y la protección no cubre cambios hostiles concurrentes del sistema de archivos. No se revisó un servicio de red, marketplace, wallet ni integración de token. El propio informe aclara que no es una auditoría de seguridad independiente.

Como este repositorio público solo contiene documentación, ejecutar aquí un comando de pruebas no reproduciría la suite capturada. Cuando se abra el código para revisión, la suite debe informar 52 pruebas con 52 aprobadas y 0 omitidas en Node v24.15.0 con el kernel vendorizado 0.1.5; docs/suite-2026-10-09.txt es la captura de referencia del comando, la versión de Node, los totales y los nombres de cada prueba. Las condiciones de publicación están en [Código no incluido](../CODE_NOT_INCLUDED.md) y [LICENSE](../LICENSE).

### Evidencia de transacciones de PERMA en testnet

El registro separado de PERMA en testnet informa una comparación independiente y de solo lectura con Horizon. El manifiesto contiene 63 hashes de transacciones: nueve entradas preliminares de fondeo de cuentas en testnet, 53 transacciones asentadas en ledger y un intento fallido de reclamo anticipado. Las entradas se agrupan abajo según la función documentada. El manifiesto no etiqueta el tipo de operación de cada hash, así que revisa los detalles de la transacción en Horizon antes de atribuir una operación concreta a un hash. Un reinicio de testnet podría dejar estos enlaces sin disponibilidad.

#### Fondeo preliminar de cuentas

El registro del proyecto identifica nueve transacciones de fondeo con Friendbot. Estas entradas del manifiesto no tienen número de ledger registrado:

- [8fa9bcbb78245faea3bcb02fa1ad80369e3850a402bf2c6f1d139a5a93da42fe](https://horizon-testnet.stellar.org/transactions/8fa9bcbb78245faea3bcb02fa1ad80369e3850a402bf2c6f1d139a5a93da42fe)
- [7d2d2422578fbbb1a63bf89ab55514b520a08a178bb7ef65624952128cef77b8](https://horizon-testnet.stellar.org/transactions/7d2d2422578fbbb1a63bf89ab55514b520a08a178bb7ef65624952128cef77b8)
- [778f3ba6932e7ce3475ea6d2137ed2f9b0b8bc5cf4e2e79166a8f39225e72854](https://horizon-testnet.stellar.org/transactions/778f3ba6932e7ce3475ea6d2137ed2f9b0b8bc5cf4e2e79166a8f39225e72854)
- [a98418c1600293ace432a0b79df01ee8b89858eb1c4805007ebe6b8fcf496371](https://horizon-testnet.stellar.org/transactions/a98418c1600293ace432a0b79df01ee8b89858eb1c4805007ebe6b8fcf496371)
- [9dc0cccc4d1d9dd76e63b00196654d6d1ad5607d65d72eda33bc66a20a1439ab](https://horizon-testnet.stellar.org/transactions/9dc0cccc4d1d9dd76e63b00196654d6d1ad5607d65d72eda33bc66a20a1439ab)
- [745656a90e69324901b2a0801ecf97e304936b3dcb4cf54c0170d6fc9486a990](https://horizon-testnet.stellar.org/transactions/745656a90e69324901b2a0801ecf97e304936b3dcb4cf54c0170d6fc9486a990)
- [6f42f1d224c09c9e9099325f19a202997bb2947a2a8f22e7f581df623622a707](https://horizon-testnet.stellar.org/transactions/6f42f1d224c09c9e9099325f19a202997bb2947a2a8f22e7f581df623622a707)
- [dd119e3396e3759f0655985a0e6f96b3d6868137a24a1461c51a0493260da1da](https://horizon-testnet.stellar.org/transactions/dd119e3396e3759f0655985a0e6f96b3d6868137a24a1461c51a0493260da1da)
- [f877dbf45c4617b93b924b6df6d822a53db6d029998c84f25264af0be6960d6f](https://horizon-testnet.stellar.org/transactions/f877dbf45c4617b93b924b6df6d822a53db6d029998c84f25264af0be6960d6f)

#### Secuencia de operaciones de PERMA asentadas en ledger

Estas 53 transacciones exitosas están registradas entre los ledgers 5010900 y 5010953. El informe de verificación independiente usa la secuencia y el estado de Horizon para comprobar la oferta fija, el bloqueo y las banderas de la emisora, los saldos por cubeta y los 36 balances reclamables de vesting. El manifiesto no relaciona cada hash con un tipo de operación:

- [d77ef091fe839d60ace129f432d2782e0d888b9f3b49a365454c144c896abfad](https://horizon-testnet.stellar.org/transactions/d77ef091fe839d60ace129f432d2782e0d888b9f3b49a365454c144c896abfad) (ledger 5010900)
- [063bd74798e51868b2af400207f7651c46ba87c218df92a612b6681fc67a6760](https://horizon-testnet.stellar.org/transactions/063bd74798e51868b2af400207f7651c46ba87c218df92a612b6681fc67a6760) (ledger 5010901)
- [2f095252ef5db6614148cf65bdc9a9359b51cccdbb8d63e4f49453215de6a006](https://horizon-testnet.stellar.org/transactions/2f095252ef5db6614148cf65bdc9a9359b51cccdbb8d63e4f49453215de6a006) (ledger 5010902)
- [a5fe6d7253e632be37511369bd505dacf4807b3dae8d6a37ec2842d57915444f](https://horizon-testnet.stellar.org/transactions/a5fe6d7253e632be37511369bd505dacf4807b3dae8d6a37ec2842d57915444f) (ledger 5010903)
- [9d2be96274ccc97aa46f0457f298c6ff47e9e180bacd63e7e425c4bb652eca0f](https://horizon-testnet.stellar.org/transactions/9d2be96274ccc97aa46f0457f298c6ff47e9e180bacd63e7e425c4bb652eca0f) (ledger 5010904)
- [cac8f38c5b0e2eb30fdfeeaf1ca4a8f71c3a82610d3317194d03210e68d7db08](https://horizon-testnet.stellar.org/transactions/cac8f38c5b0e2eb30fdfeeaf1ca4a8f71c3a82610d3317194d03210e68d7db08) (ledger 5010905)
- [7a17852beac1291abd9daf8b6e8a0638cefbc8bbdd7155f244e5edfc198ab7bb](https://horizon-testnet.stellar.org/transactions/7a17852beac1291abd9daf8b6e8a0638cefbc8bbdd7155f244e5edfc198ab7bb) (ledger 5010906)
- [2d6f9e76386ec6e12eb576c77543750fc319d77866b55656dc9e73a6835927f8](https://horizon-testnet.stellar.org/transactions/2d6f9e76386ec6e12eb576c77543750fc319d77866b55656dc9e73a6835927f8) (ledger 5010907)
- [67376dfb6eb091621eb153995b6c7807afbefdc162c4323588d1b68523ee15c6](https://horizon-testnet.stellar.org/transactions/67376dfb6eb091621eb153995b6c7807afbefdc162c4323588d1b68523ee15c6) (ledger 5010908)
- [dfed371f8d4fbb7b9199e9a4a412b57ecb402ebfe82fec8c78a45bcd7d3b94b2](https://horizon-testnet.stellar.org/transactions/dfed371f8d4fbb7b9199e9a4a412b57ecb402ebfe82fec8c78a45bcd7d3b94b2) (ledger 5010909)
- [a16f1b34b6ecf9e5423af17c34b4e0393666c409c7a288df7d43fa4f44fadc44](https://horizon-testnet.stellar.org/transactions/a16f1b34b6ecf9e5423af17c34b4e0393666c409c7a288df7d43fa4f44fadc44) (ledger 5010910)
- [44093fa2aa7e71a86a5fcc3b35982ab9e7c876bdace7618b512eee1e9006cef1](https://horizon-testnet.stellar.org/transactions/44093fa2aa7e71a86a5fcc3b35982ab9e7c876bdace7618b512eee1e9006cef1) (ledger 5010911)
- [24a13e6ed688cc1f7f2063e336ed5fd229591a78ea685ef90bcce01102971c4a](https://horizon-testnet.stellar.org/transactions/24a13e6ed688cc1f7f2063e336ed5fd229591a78ea685ef90bcce01102971c4a) (ledger 5010912)
- [530554c14dc3d5eab608ab109aade6183666f201d5cc185e1df79904ca32f801](https://horizon-testnet.stellar.org/transactions/530554c14dc3d5eab608ab109aade6183666f201d5cc185e1df79904ca32f801) (ledger 5010913)
- [6aaa442c01d156794406752102d56bd05f1740a3c7632fd98f42eede8f5e4c4c](https://horizon-testnet.stellar.org/transactions/6aaa442c01d156794406752102d56bd05f1740a3c7632fd98f42eede8f5e4c4c) (ledger 5010914)
- [e82b06d6a16191f5ef4cf00e079192339776bd04cabdf0149aafa58d2d7087eb](https://horizon-testnet.stellar.org/transactions/e82b06d6a16191f5ef4cf00e079192339776bd04cabdf0149aafa58d2d7087eb) (ledger 5010915)
- [2671a6fe9db37646078fadbe99c78653c64ff4da9b0c5a0532be262759281815](https://horizon-testnet.stellar.org/transactions/2671a6fe9db37646078fadbe99c78653c64ff4da9b0c5a0532be262759281815) (ledger 5010917)
- [d9ecc9a22b4f079ecefbe1c32104ef0ec0a7da1b2011f5a7ef4dca0e8921914e](https://horizon-testnet.stellar.org/transactions/d9ecc9a22b4f079ecefbe1c32104ef0ec0a7da1b2011f5a7ef4dca0e8921914e) (ledger 5010918)
- [e32f07371d37ce05d4c16463cc438b9bf036d93f8348634584d481fae5971109](https://horizon-testnet.stellar.org/transactions/e32f07371d37ce05d4c16463cc438b9bf036d93f8348634584d481fae5971109) (ledger 5010919)
- [6462ae68e768f1773a09c56076be68444e2763cf2e714d1addfdcd3eaab035d2](https://horizon-testnet.stellar.org/transactions/6462ae68e768f1773a09c56076be68444e2763cf2e714d1addfdcd3eaab035d2) (ledger 5010920)
- [8c5d08d1b1f4bb9700705821e7345e754920a2bf58ebae302b62d7cf664527ae](https://horizon-testnet.stellar.org/transactions/8c5d08d1b1f4bb9700705821e7345e754920a2bf58ebae302b62d7cf664527ae) (ledger 5010921)
- [1439fa1436d875bb87407d7f22c47d8ea5ae66ed4a06cac72d084f841e906256](https://horizon-testnet.stellar.org/transactions/1439fa1436d875bb87407d7f22c47d8ea5ae66ed4a06cac72d084f841e906256) (ledger 5010922)
- [6a27f5ea6fffaabc6c4be70bf97be1f11292d38e802e72f0d7fa56395c9c3277](https://horizon-testnet.stellar.org/transactions/6a27f5ea6fffaabc6c4be70bf97be1f11292d38e802e72f0d7fa56395c9c3277) (ledger 5010923)
- [61985c0f902c1d05b091f51a89c09d19ce9bd357a147d0ee1950fbe46cdfa118](https://horizon-testnet.stellar.org/transactions/61985c0f902c1d05b091f51a89c09d19ce9bd357a147d0ee1950fbe46cdfa118) (ledger 5010924)
- [4945caae03616b7798af7817853d6652bd57e9f6fecfa47fa8d40c3e7dced4a0](https://horizon-testnet.stellar.org/transactions/4945caae03616b7798af7817853d6652bd57e9f6fecfa47fa8d40c3e7dced4a0) (ledger 5010925)
- [d1ee16eecc052fa26c068f91dbd81e26058ed833031b3d0aa1393659e56390e8](https://horizon-testnet.stellar.org/transactions/d1ee16eecc052fa26c068f91dbd81e26058ed833031b3d0aa1393659e56390e8) (ledger 5010926)
- [d43a2767d72cc16f228361a777e4427f706a7941280b68459b70c27ba5d19ef2](https://horizon-testnet.stellar.org/transactions/d43a2767d72cc16f228361a777e4427f706a7941280b68459b70c27ba5d19ef2) (ledger 5010927)
- [88357f1075c448782479c4478f8f384ffff5512e13f40988ebfbf334e364fc1d](https://horizon-testnet.stellar.org/transactions/88357f1075c448782479c4478f8f384ffff5512e13f40988ebfbf334e364fc1d) (ledger 5010928)
- [3bf7a9ec98703e9817e5802a4270542a969ad209873ea8878f57aa2ed724003a](https://horizon-testnet.stellar.org/transactions/3bf7a9ec98703e9817e5802a4270542a969ad209873ea8878f57aa2ed724003a) (ledger 5010929)
- [b50d503634f2fcb67a3d979243b09973fae55f6dd598a1e3d2fb3330d032a1f2](https://horizon-testnet.stellar.org/transactions/b50d503634f2fcb67a3d979243b09973fae55f6dd598a1e3d2fb3330d032a1f2) (ledger 5010930)
- [3e74cc62590b808339a7e4364818082258a21fb0064d91f66f0bde58afaa1c68](https://horizon-testnet.stellar.org/transactions/3e74cc62590b808339a7e4364818082258a21fb0064d91f66f0bde58afaa1c68) (ledger 5010931)
- [50e3c16d50bc573affe54a44e8d74bba9886d29008fec149a2e7f389041f7a76](https://horizon-testnet.stellar.org/transactions/50e3c16d50bc573affe54a44e8d74bba9886d29008fec149a2e7f389041f7a76) (ledger 5010932)
- [f10f1252e04cc7fc7cb4af82cd135b67088f12f89913444e109ff8b8244be191](https://horizon-testnet.stellar.org/transactions/f10f1252e04cc7fc7cb4af82cd135b67088f12f89913444e109ff8b8244be191) (ledger 5010933)
- [2de71c1b076fe1c6abb9bb7926c69e94a270e65c05cd2dfd0e82d36e51c862eb](https://horizon-testnet.stellar.org/transactions/2de71c1b076fe1c6abb9bb7926c69e94a270e65c05cd2dfd0e82d36e51c862eb) (ledger 5010934)
- [bc9fdbb749ad7f32e198318628f02c571b832a18eec87710d3790aa98ea5a975](https://horizon-testnet.stellar.org/transactions/bc9fdbb749ad7f32e198318628f02c571b832a18eec87710d3790aa98ea5a975) (ledger 5010935)
- [8ecf9bab12b2d3d3e21c7dafde3d983b8fb4d5d8948639fac63cece4a8e265f7](https://horizon-testnet.stellar.org/transactions/8ecf9bab12b2d3d3e21c7dafde3d983b8fb4d5d8948639fac63cece4a8e265f7) (ledger 5010936)
- [8d188608ffb3bdd3a414d93ff10f8710d95440385def23115ce99abd47148ef0](https://horizon-testnet.stellar.org/transactions/8d188608ffb3bdd3a414d93ff10f8710d95440385def23115ce99abd47148ef0) (ledger 5010937)
- [58493c1957bebe52212e2abe826744c5865182d3abc011752ede2fffa6855022](https://horizon-testnet.stellar.org/transactions/58493c1957bebe52212e2abe826744c5865182d3abc011752ede2fffa6855022) (ledger 5010938)
- [0fe009e7a2b1003c619848623dae919722a786b9f7a9ff5ba87a4c7558263a5f](https://horizon-testnet.stellar.org/transactions/0fe009e7a2b1003c619848623dae919722a786b9f7a9ff5ba87a4c7558263a5f) (ledger 5010939)
- [5a87249695a27558ffdc01b6eeadcd35c04ac01288f4039ccf0dc2f1b18e423f](https://horizon-testnet.stellar.org/transactions/5a87249695a27558ffdc01b6eeadcd35c04ac01288f4039ccf0dc2f1b18e423f) (ledger 5010940)
- [e3cad75ee3998ade9e55977cb810f599df366ae4f83269eb8d6429b9b1e57293](https://horizon-testnet.stellar.org/transactions/e3cad75ee3998ade9e55977cb810f599df366ae4f83269eb8d6429b9b1e57293) (ledger 5010941)
- [4e3c04e5be4182053399d234f0984cede8d247025a09370fdbcdfca58cfd3345](https://horizon-testnet.stellar.org/transactions/4e3c04e5be4182053399d234f0984cede8d247025a09370fdbcdfca58cfd3345) (ledger 5010942)
- [4cc10d85875373c6577ca395d2bc6229c7d8f2f6cd6bc2d647c8a4c70c8031ce](https://horizon-testnet.stellar.org/transactions/4cc10d85875373c6577ca395d2bc6229c7d8f2f6cd6bc2d647c8a4c70c8031ce) (ledger 5010943)
- [aeb42c6f5472d3f46dfc4861a6a24159744018c41d00d23fefc586f0bb1ba90b](https://horizon-testnet.stellar.org/transactions/aeb42c6f5472d3f46dfc4861a6a24159744018c41d00d23fefc586f0bb1ba90b) (ledger 5010944)
- [f3ce724cbf870a391aff7bd734454fa03b4945a9c5db5649b3189c6f1085fe14](https://horizon-testnet.stellar.org/transactions/f3ce724cbf870a391aff7bd734454fa03b4945a9c5db5649b3189c6f1085fe14) (ledger 5010945)
- [9734580994c6206b6c3876a4a7f90bb317997a9ea73c18841de3a99e63d87930](https://horizon-testnet.stellar.org/transactions/9734580994c6206b6c3876a4a7f90bb317997a9ea73c18841de3a99e63d87930) (ledger 5010946)
- [9dfc662560b010daef43d5784a6276d9a661370566c849968a51a7a499986147](https://horizon-testnet.stellar.org/transactions/9dfc662560b010daef43d5784a6276d9a661370566c849968a51a7a499986147) (ledger 5010947)
- [b0c2d50f064ab264e94a5a4e12756bfdffde78fbbde2d1431e9a0554bafacd4a](https://horizon-testnet.stellar.org/transactions/b0c2d50f064ab264e94a5a4e12756bfdffde78fbbde2d1431e9a0554bafacd4a) (ledger 5010948)
- [275d87cd387f76cc689f1df4f35341b1baeb3f755c212533cb99bdb9aae991e7](https://horizon-testnet.stellar.org/transactions/275d87cd387f76cc689f1df4f35341b1baeb3f755c212533cb99bdb9aae991e7) (ledger 5010949)
- [22f258a037b2fe610f5e840603c92861d2666a23b11531e12bd129561046e31e](https://horizon-testnet.stellar.org/transactions/22f258a037b2fe610f5e840603c92861d2666a23b11531e12bd129561046e31e) (ledger 5010950)
- [fb2425b9ea5e5a0b2bc5ec3ca58148cf0f0cdd01e412d300eab1665207488317](https://horizon-testnet.stellar.org/transactions/fb2425b9ea5e5a0b2bc5ec3ca58148cf0f0cdd01e412d300eab1665207488317) (ledger 5010951)
- [5fafc09cfc954bfc0b877c11530edaf8528e4e2484e413a9be24c455fd9fb59c](https://horizon-testnet.stellar.org/transactions/5fafc09cfc954bfc0b877c11530edaf8528e4e2484e413a9be24c455fd9fb59c) (ledger 5010952)
- [c86d006922088aa1a791dfde81b3e19edfa5ace3234d89f76885553ee28c9325](https://horizon-testnet.stellar.org/transactions/c86d006922088aa1a791dfde81b3e19edfa5ace3234d89f76885553ee28c9325) (ledger 5010953)

#### Prueba de reclamo anticipado fallido

El manifiesto registra este intento de reclamo como fallido, de acuerdo con el resultado informado `too_early`. No representa un pago exitoso:

- [8ec2975f3a774002202ace8df950b96f3f827b4be4142a6a5568ad7b6bae27fd](https://horizon-testnet.stellar.org/transactions/8ec2975f3a774002202ace8df950b96f3f827b4be4142a6a5568ad7b6bae27fd)

#### Cómo volver a comprobar

Abre cada enlace de Horizon para revisar el resultado, las operaciones, el ledger y la hora de la transacción. Compara los hashes asentados en ledger y el estado resultante del activo y de las cuentas con el registro de testnet. Horizon confirma registros en testnet, no derechos culturales, autoridad jurídica, actividad de un marketplace, pagos por una obra, derecho a regalías, demanda ni valor. El repositorio público no incluye el código del verificador de solo lectura ni las claves secretas, y al preparar esta página no se hizo una comprobación independiente en la red.
