document.getElementById('generateButton').addEventListener('click', function() {
    document.getElementById('techPhrase').textContent = generateTechPhrase();
});

function generateTechPhrase() {
    const phrases = [
        "I'll create a neural network to bypass the firewall.",
        "Let's use quantum encryption to secure the database.",
        "I'll write a GUI in Visual Basic to track the IP address.",
        "We need to defragment the blockchain.",
        "I'll use a Raspberry Pi to hack the mainframe.",
        "I'm rerouting the algorithm through a hyper-quantum processor, this should break us into the main security system in no time!",
        "I'll use a quantum computer to brute-force the encryption.",
        "We'll decrypt the mainframe's bio-metric firewall using a polymorphic code. It's risky, but it's the only way to access the secret files.",
        "I'm inverting the DNS protocol to access the blockchain ledger. This will expose their entire crypto operation.",
        "Let's compile a neural network to simulate quantum entanglement. We can use this to predict their next move.",
        "I'm using AI to enhance the optical fiber's bandwidth by photon manipulation. This will speed up our data transfer exponentially.",
        "We're hacking the satellite's gyroscopic stabilizer with a pseudo-random encryption key. It's a one-in-a-million shot, but it just might work.",
        "I'm modulating the frequency of the IoT devices through a virtual synaptic network. It will create a perfect smokescreen for our escape.",
        "We're cross-linking the virtual machine to a decentralized neural blockchain. This will anonymize every action we take.",
        "Let's enhance the cyber grid's security with a self-replicating AI algorithm. They won't see it coming.",
        "I'm intercepting the RFID signals with a photonic resonance field. This should disable all their security measures.",
        "We're deploying nano-drones to establish a mesh network in the stratosphere. This will give us global coverage.",
        "I'm programming a holographic interface to interact with quantum-encoded data. This is next-level espionage.",
        "Let's utilize the thermal dynamics of processors for cryogenic encryption. It's the ultimate cold war strategy.",
        "I'll extract the digital signature from quantum-fluctuating circuits. It's like finding a needle in a haystack, but I can do it.",
        "We're integrating a flux capacitor for temporal data processing. Time is literally on our side now.",
        "I'm overclocking the CPU with a zero-point energy module. We're pushing this machine to its limits!",
        "We'll bypass the server's firewall through a tachyon-based data stream. It's faster than light; they won't even see us coming.",
        "I'm employing psychokinetic sensors to enhance user interface experiences. It'll be like mind-reading their systems.",
        "Let's construct a virtual labyrinth within the blockchain for secure data traversal. They'll be lost in there for days.",
        "I'm channeling the dark web through a prism of AI-generated algorithms. It's a maze of information, but I'll find what we need.",
        // Add as many phrases as you like here
    ];

    const randomIndex = Math.floor(Math.random() * phrases.length);
    return phrases[randomIndex];
}