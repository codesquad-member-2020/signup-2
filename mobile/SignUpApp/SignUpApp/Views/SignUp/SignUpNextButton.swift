//
//  SignUpNextButton.swift
//  SignUpApp
//
//  Created by Cory Kim on 2020/03/25.
//  Copyright © 2020 corykim0829. All rights reserved.
//

import UIKit

class SignUpNextButton: UIButton {
    
    private let keyColor = UIColor(named: "KeyColor")
    
    var isIDValid: Bool = false { didSet { checkButtonValidation() } }
    var isPWValid: Bool = false { didSet { checkButtonValidation() } }
    var isPWCheckValid: Bool = false { didSet { checkButtonValidation() } }
    var isNameValid: Bool = false { didSet { checkButtonValidation() } }
    
    private func checkButtonValidation() {
        isValid = isIDValid && isPWValid && isPWCheckValid && isNameValid
    }
    
    var isValid: Bool = false {
        didSet {
            isEnabled = isValid
            updateButton()
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
    
    private func updateButton() {
        let color = isValid ? keyColor : .lightGray
        tintColor = color
    }
    
    private func configure() {
        layer.borderColor = UIColor.darkGray.cgColor
        layer.borderWidth = 1.5
        layer.cornerRadius = 0
        setTitleColor(.lightGray, for: .disabled)
        setTitleColor(keyColor, for: .normal)
        updateButton()
    }
}
