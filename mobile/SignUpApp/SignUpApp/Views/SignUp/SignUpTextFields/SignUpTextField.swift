//
//  SignUpTextField.swift
//  SignUpApp
//
//  Created by Cory Kim on 2020/03/23.
//  Copyright © 2020 corykim0829. All rights reserved.
//

import UIKit

class SignUpTextField: UITextField {
    
    static let UnavailableStatusColor = UIColor(named: "AlertWrong")!
    static let AvailableStatusColor = UIColor(named: "AlertCorrect")!
    
    override var isHighlighted: Bool {
        didSet {
            borderColor = isHighlighted ? #colorLiteral(red: 0.2392156869, green: 0.6745098233, blue: 0.9686274529, alpha: 1) : .darkGray
        }
    }
    
    var isValid: Bool = false {
        didSet {
            borderColor = isValid ? Self.AvailableStatusColor : Self.UnavailableStatusColor
        }
    }
    
    var borderColor: UIColor = .darkGray {
        didSet {
            layer.borderColor = borderColor.cgColor
        }
    }

    override init(frame: CGRect) {
        super.init(frame: frame)
        configure()
    }
    
    required init?(coder: NSCoder) {
        super.init(coder: coder)
        configure()
    }
    
    override func textRect(forBounds bounds: CGRect) -> CGRect {
        return bounds.insetBy(dx: 8, dy: 0)
    }
    
    override func editingRect(forBounds bounds: CGRect) -> CGRect {
        return bounds.insetBy(dx: 8, dy: 0)
    }
    
    private func configure() {
        layer.borderWidth = 1.5
        layer.cornerRadius = 0
        borderStyle = .none
    }
}
